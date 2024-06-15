import { memo } from 'react'
import { Box,Card,Avatar,Text,Flex } from '@radix-ui/themes'

const Profile = memo(() => {
  return (
    <Box maxWidth="240px">
      <Card>
        <Flex gap="3" align="center">
          <Avatar
            size="2"
            src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
            radius="full"
            fallback="👤"
          />
          <Box>
            <Text as="div" size="2" weight="bold">
              User Name
            </Text>
            <Text as="div" size="1" color="gray">
              User Email
            </Text>
          </Box>
        </Flex>
      </Card>
    </Box>
  )
})

export default Profile