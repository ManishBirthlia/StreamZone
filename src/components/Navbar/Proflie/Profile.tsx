import { memo } from 'react'
import { Box,Card,Avatar,Text,Flex } from '@radix-ui/themes'
import { useKindeAuth } from '@kinde-oss/kinde-auth-react'

const Profile = memo(() => {
  const {user}:any = useKindeAuth();
  
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap={{ initial: '1', md: '2', xl: '3', }} align="center">
          <Avatar
            size={{ initial: '1', md: '2', xl: '2', }}
            src={user?.picture}
            radius="full"
            fallback="👤"
          />
          <Box>
            <Text as="div" size={{ initial: '1', md: '2', xl: '2', }} weight="bold">
              {user?.given_name + user?.family_name}
            </Text>
            <Text as="div" size="1" color="gray">
              {user?.email}
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
})

export default Profile