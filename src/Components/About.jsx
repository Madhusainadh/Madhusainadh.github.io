import { Box, Container, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "../logo.jpg"
export default function About() {
  return (
    <div bg={'black'}  >
      <Flex bg={'black'} color={"white"}>
      <Container   ><Image borderRadius={'50%'} src={logo }alt="madhusainadh"></Image></Container>
      <Container bg ={'blue'} ><VStack align={'center'}> <Text alignSelf={'center'} fontSize='5xl'>Madhusainadh lalam</Text></VStack></Container>
      </Flex>
    </div>
  )
}
