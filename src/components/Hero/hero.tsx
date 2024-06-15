import { memo, useRef } from 'react'
import { Container } from '@radix-ui/themes';
import Herotitle from './HeroTitle/herotitle';
import Streamwindow from './StreamWindow/streamwindow';

const hero = memo(() => {
  const videoRef :any = useRef('#');

  const handleStreamStart= async()=>{
    const media = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
    videoRef.current.srcObject=media;
  }
  
  return (
    <Container align='center'>
      <Streamwindow ref={videoRef}/>
      <Herotitle handleStreamStart={handleStreamStart}/>
    </Container>
  )
})

export default hero