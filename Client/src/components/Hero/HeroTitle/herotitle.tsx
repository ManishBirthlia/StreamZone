import { Box, Button,Flex,Heading} from '@radix-ui/themes'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import RtmpForm from '../RtmpForm/rtmpForm'

const herotitle = memo((props:any) => {
  const rtmpKey=useSelector((state:any)=>state.rtmp.value);
  const streamOn = useSelector((state:any)=>state.stream.value)
  return (
    <Box className='StreamMediaButton'>
      <Heading size='6' align='center' weight="bold" >Use StreamZone and Stream like never before</Heading>
      <Flex gap='4' direction='row' justify='center'>
      <RtmpForm />
      {rtmpKey && <Button my='4' size='4' variant={streamOn?'surface':'solid'} 
      onClick={props.startStream} 
      style={{cursor:'pointer'}} >Start Streaming</Button>}
      {rtmpKey && <Button my='4' size='4' variant='surface' 
      onClick={props.endStream} 
      style={{cursor:'pointer'}} >End Stream</Button>}
      </Flex>
    </Box>
  )
})

export default herotitle