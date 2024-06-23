import express from "express";
import http from "node:http"
import cors from 'cors'
import { Server } from "socket.io";
import path from "node:path";
import { config } from "dotenv";
import { fileURLToPath } from 'node:url';
import { spawn } from 'child_process'

config();
const PORT=process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app =express();
const server=http.createServer(app);
const io = new Server(server);
app.use(cors());

const options = [
    '-i',
    '-',
    '-c:v', 'libx264',
    '-preset', 'ultrafast',
    '-tune', 'zerolatency',
    '-r', `${25}`,
    '-g', `${25 * 2}`,
    '-keyint_min', 25,
    '-crf', '25',
    '-pix_fmt', 'yuv420p',
    '-sc_threshold', '0',
    '-profile:v', 'main',
    '-level', '3.1',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-ar', 128000 / 4,
    '-f', 'flv',
    `rtmp://a.rtmp.youtube.com/live2/h7qy-0xev-y97c-wdda-a0ka`,
];

const ffmpegProcess = spawn('ffmpeg', options);

ffmpegProcess.stdout.on('data', (data) => {
    console.log(`ffmpeg stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
    console.error(`ffmpeg stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
    console.log(`ffmpeg process exited with code ${code}`);
});

app.use('/',express.static(path.join(__dirname,'../Client/dist')))

io.on('connection',socket=>{
    socket.on('binarystream',data=>{
        console.log("binarystream Incoming...")
        ffmpegProcess.stdin.write(stream, (err) => {
            console.log('Err', err)
        })
    })
})

server.listen(PORT,()=>{
    console.log(`The Server is Live at PORT:${PORT}`)
})