import { memo, useRef, useState } from 'react'
import { Container } from '@radix-ui/themes';
import Herotitle from './HeroTitle/herotitle';
import Streamwindow from './StreamWindow/streamwindow';
import { useDispatch } from 'react-redux';
import { changeStreamState } from '../../app/streamSlice';
import { io } from 'socket.io-client';

const socket=io("http://localhost:3000/")

const hero = memo(() => {
  const videoRef :any = useRef('#');
  const [streamState,setStreamState]:[streamState:any,setStreamState:(e:any)=>void]=useState(null);
  const dispatch = useDispatch();

  const handleStreamStart= async()=>{
    const media = await navigator.mediaDevices.getUserMedia({audio:false,video:true});
    videoRef.current.srcObject=media;
    setStreamState(media);
    dispatch(changeStreamState());
  }

  const startStream = ()=>{
    const mediaRecorder =new MediaRecorder(streamState,{
      audioBitsPerSecond:128000,
      videoBitsPerSecond:2500000,
    })
    mediaRecorder.ondataavailable = (ev)=>{
      socket.emit("binarystream",ev.data);
    }
    mediaRecorder.start(25);
  }
  
  return (
    <Container align='center'>
      <Streamwindow ref={videoRef}/>
      <Herotitle handleStreamStart={handleStreamStart} startStream={startStream}/>
    </Container>
  )
})

export default hero;