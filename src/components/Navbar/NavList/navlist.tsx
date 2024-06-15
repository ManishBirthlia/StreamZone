import { Flex, Link } from '@radix-ui/themes'
import React, { memo } from 'react'

const navlist = memo(() => {
  return (
    <Flex gap='3' align='center' wrap='wrap' direction='row'>
      <Link href='#' >Home</Link>
      <Link href='#' >About</Link>
      <Link href='#' >Contact</Link>
      <Link href='#' >Register</Link>
    </Flex>
  )
})

export default navlist