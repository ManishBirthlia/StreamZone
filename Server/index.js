import express from "express";
import http from "node:http";
import cors from 'cors';
import { Server } from "socket.io";
import path from "node:path";
import { config } from "dotenv";
import { fileURLToPath } from 'node:url';
import { spawn } from 'child_process';

config();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

let ffmpegProcess = null;

const createFfmpegProcess = (rtmpUrl)=>{
  const options = [
    '-i', '-',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-r', '25',
    '-g', '50',
    '-keyint_min', 25,
    '-crf', '25',
    '-pix_fmt', 'yuv420p',
    '-sc_threshold', '0',
    '-profile:v', 'main',
    '-level', '3.1',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', '32000',
    '-f', 'flv',
    rtmpUrl
  ];

  const ffmpeg = spawn('ffmpeg', options);
      
  ffmpeg.stdout.on('data', (data) => {
    console.log(`ffmpeg stdout: ${data}`);
  });

  ffmpeg.stderr.on('data', (data) => {
    console.error(`ffmpeg stderr: ${data}`);
  });

  ffmpeg.on('close', (code) => {
    console.log(`ffmpeg process exited with code ${code}`);
  });

  return ffmpeg;
}
app.use('/', express.static(path.join(__dirname, '../Client/dist')));

app.get('/endStream', async (req, res) => {
  if(ffmpegProcess){ 
    ffmpegProcess.stdin.end();
  }
  ffmpegProcess=null;
  res.status(200).json({ endedStream: "The stream is ended successfully" });
});

io.on('connection', (socket) => {
  console.log(`Client connected: ${socket.id}`);

  socket.on('binarystream', (data) => {
    console.log("binarystream Incoming...");
    const completeRtmpUrl=data.rtmpUrl+data.rtmpKey;
    if(!ffmpegProcess) ffmpegProcess = createFfmpegProcess(completeRtmpUrl);
    ffmpegProcess.stdin.write(data.mediaData, (err) => {
      if (err) {
        console.error('Error writing to ffmpeg stdin:', err);
      }
    });
  });

  socket.on('disconnect', () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

server.listen(PORT, () => {
  console.log(`The Server is Live at PORT:${PORT}`);
});
