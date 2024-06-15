import { AspectRatio, Box} from '@radix-ui/themes'
import { forwardRef, memo} from 'react'


const streamwindow = memo(forwardRef((ref:any) => {

  return (
    <Box className='StreamMedia'>
      <AspectRatio ratio={16 / 8} className='AspectMedia'>
        <div>
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