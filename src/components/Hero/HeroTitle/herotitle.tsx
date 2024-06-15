import { Box, Button, Heading} from '@radix-ui/themes'
import { memo } from 'react'

const herotitle = memo((props:any) => {
  return (
    <Box my='4' className='StreamMediaButton'>
      <Heading size='6' align='center' weight="bold" >Use StreamZone and Stream like never before</Heading>
      <Button my='4' size='4' onClick={props.handleStreamStart} >Join Today</Button>
    </Box>
  )
})

export default herotitle