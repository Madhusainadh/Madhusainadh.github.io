import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import pick from "../logo.jpg"
import logo from "../gifmadhu.gif"
export default function About() {
  return (
    <Box   bg={'black'} pt={"100px"} id="me"  >
      <Flex  bg={'black'} color={"white"}>
      <Container   ><Image borderRadius={'50%'} src={pick }  alt="madhusainadh"></Image></Container>
      <Container  ><img src={logo}></img></Container>
      </Flex>
    </Box>
  )
}
