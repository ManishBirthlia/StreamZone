import { Box, Avatar, Text, Flex, Link } from '@radix-ui/themes'
import { memo } from 'react'
import componet from './Component 1.svg';

const logo = memo(() => {
  return (
    <Box maxWidth="240px">
        <Link href='/'>
          <Flex gap={{ initial: '2', md: '3', xl: '3', }} align="center">
            <Avatar
              size={{ initial: '1', md: '2', xl: '2', }}
              src={componet}
              radius="large"
              fallback="SZ"
              />
            <Box>
              <Text as="div" size={{ initial: '1', md: '2', xl: '2', }} weight="bold">
                StreamZone
              </Text>
            </Box>
          </Flex>
        </Link>
    </Box>
  )
})

export default logo