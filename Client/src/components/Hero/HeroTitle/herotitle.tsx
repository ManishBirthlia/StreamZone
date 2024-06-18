import { Box, Button, Heading} from '@radix-ui/themes'
import { memo } from 'react'
import { useSelector } from 'react-redux'

const herotitle = memo((props:any) => {
  const streamOn = useSelector((state:any)=>state.stream.value)
  return (
    <Box my='4' className='StreamMediaButton'>
      <Heading size='6' align='center' weight="bold" >Use StreamZone and Stream like never before</Heading>
      <Button my='4' size='4' variant={streamOn?'surface':'solid'} onClick={streamOn?props.startStream:props.handleStreamStart} style={{cursor:'pointer'}} >{streamOn?'Start Streaming':'Join Today'}</Button>
    </Box>
  )
})

export default herotitle