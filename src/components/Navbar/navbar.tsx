import { Card, Container,Flex } from '@radix-ui/themes'
import { memo } from 'react'
import Navlist from './NavList/navlist'
import Logo from './Logo/logo'
import Profile from './Proflie/Profile'
import { useSelector} from 'react-redux'

const navbar = memo(() => {
  const user=useSelector((state:any)=>state.user.value)
  return (
    <Container size="4" align='center'>
      <Card >
        <Flex align="center" gap="9" wrap="wrap">
          <Logo />
          <Navlist />
          {user && <Profile />}
        </Flex>
    </Card>
    </Container>
  )
})

export default navbar