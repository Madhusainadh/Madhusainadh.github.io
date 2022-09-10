import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import pick from "../logo.jpg"
import logo from "../gifmadhu.gif"
export default function About() {
  return (
    <div bg={'black'}  >
      <Flex bg={'black'} color={"white"}>
      <Container   ><Image borderRadius={'50%'} src={pick }alt="madhusainadh"></Image></Container>
      <Container  ><img src={logo}></img></Container>
      </Flex>
    </div>
  )
}
