import { memo, useEffect, useRef, useState } from 'react';
import { Container } from '@radix-ui/themes';
import Herotitle from './HeroTitle/herotitle';
import Streamwindow from './StreamWindow/streamwindow';
import { useDispatch, useSelector } from 'react-redux';
import { changeStreamState } from '../../app/streamSlice';
import { io } from 'socket.io-client';
import axios from 'axios';
import { changeUserRtmpState } from '../../app/rtmpSlice';

const socket = io("http://localhost:3000/");

const Hero = memo(() => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rtmpPlatform = useSelector((state:any)=>state.rtmp.value?JSON.parse(state.rtmp.value):null);
  const [streamState, setStreamState] = useState<MediaStream | null>(null);
  const dispatch = useDispatch();

  const handleStreamStart = async () => {
    try {
      const media = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = media;
      }
      setStreamState(media);
      dispatch(changeStreamState());
    } catch (error) {
      alert("Kindly provide permission to Camera and audio for using this application...");
      console.error("Error accessing media devices.", error);
    }
  };

  const startStream = () => {
    if(!streamState){
      alert("Permission to Camera and audio is unavalable so cannot start streaming...");
    }else if(rtmpPlatform){
      try {
        const mediaRecorder = new MediaRecorder(streamState, {
          audioBitsPerSecond: 128000,
          videoBitsPerSecond: 2500000,
        });

        mediaRecorder.ondataavailable = (event) => {
          console.log('Binary Stream Available', event.data);
          socket.emit('binarystream', {'mediaData':event.data,...rtmpPlatform});
        };
        
        mediaRecorder.start(25); // Starts recording and fires dataavailable event every 25ms 
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Provide RTMP Key of your youtube chanel")
    }
  };
  
  const endStream = async()=>{
    dispatch(changeUserRtmpState(''));
    const response:any = await axios.get('/endStream');
    alert(response?.endStream);
  }

  useEffect(() => {
    handleStreamStart();
    socket.on("connect", () => {
      console.log("Socket is connected", socket.id, socket.connected);
    });

    socket.io.on("error", (error) => {
      console.error("Socket error: ", error);
    });

    return () => {
      socket.off("connect");
      socket.io.off("error");
    };
  }, []);

  return (
    <Container align='center'>
      <Streamwindow ref={videoRef} />
      <Herotitle startStream={startStream} endStream={endStream} />
    </Container>
  );
});

export default Hero;
