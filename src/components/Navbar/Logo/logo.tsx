import { Box, Avatar, Text, Flex, Link } from '@radix-ui/themes'
import { memo } from 'react'

const logo = memo(() => {
  return (
    <Box maxWidth="240px">
        <Link href='/'>
          <Flex gap="3" align="center">
            <Avatar
              size="2"
              src="./Component 1.svg"
              radius="large"
              fallback="SZ"
              />
            <Box>
              <Text as="div" size="2" weight="bold">
                StreamZone
              </Text>
            </Box>
          </Flex>
        </Link>
    </Box>
  )
})

export default logo