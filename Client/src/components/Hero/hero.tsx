import { memo, useRef } from 'react'
import { Container } from '@radix-ui/themes';
import Herotitle from './HeroTitle/herotitle';
import Streamwindow from './StreamWindow/streamwindow';
import { useDispatch } from 'react-redux';
import { changeStreamState } from '../../app/streamSlice';

const hero = memo(() => {
  const videoRef :any = useRef('#');

  const dispatch = useDispatch();

  const handleStreamStart= async()=>{
    const media = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
    videoRef.current.srcObject=media;
    dispatch(changeStreamState());
  }

  const startStream = ()=>{
    console.log("stream Starting...")
  }
  
  return (
    <Container align='center'>
      <Streamwindow ref={videoRef}/>
      <Herotitle handleStreamStart={handleStreamStart} startStream={startStream}/>
    </Container>
  )
})

export default hero