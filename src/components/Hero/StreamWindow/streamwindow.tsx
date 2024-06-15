import { AspectRatio, Box} from '@radix-ui/themes'
import { forwardRef, memo, useEffect, useRef} from 'react'


const streamwindow = memo(forwardRef((props:any,ref:any) => {

  // useEffect(()=>{
  //   window.addEventListener('load',async ()=>{
  //     const media = await navigator.mediaDevices.getUserMedia({audio:true,video:true});
  //     videoRef.current.srcObject=media;
  //   })
  // },[])

  return (
    <Box className='StreamMedia'>
      <AspectRatio ratio={16 / 8} className='AspectMedia' >
        <div >
          <video autoPlay muted className='userMediaElemet' ref={ref} />
        </div>
      </AspectRatio>
    </Box>
  )
}))

export default streamwindow

// alt="User Stream Media Element"
//           style={{
//             objectFit: 'cover',
//             width: '100%',
//             height: '100%',
//             borderRadius: 'var(--radius-2)',
//           }}