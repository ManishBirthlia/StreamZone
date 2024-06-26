import { Card, Container,Flex } from '@radix-ui/themes'
import { memo } from 'react'
import Navlist from './NavList/navlist'
import Logo from './Logo/logo'
// import Profile from './Proflie/Profile'
// import { useSelector} from 'react-redux'


const navbar = memo(() => {
  // const user=useSelector((state:any)=>state.user.value)
  return (
    <Container size="4" align='center'>
      <Card >
        <Flex align="center" gap={{
            initial: '4',
            md: '5',
            xl: '6',
          }} wrap="wrap" mx='4'>
          <Logo />
          <Navlist />
          {/* {user && <Profile />} */}
        </Flex>
    </Card>
    </Container>
  )
})

export default navbar