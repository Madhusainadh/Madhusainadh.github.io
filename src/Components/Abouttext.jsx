import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Img,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "./Abouttext.css";
import back from "./pngback.png";
import { Link } from "react-scroll";

export default function Abouttext() {


  




  return (
    <Box className="body" color={"white"} pt={"100px"} id="About">
    <SimpleGrid pt={"50px"} gap={"60px"} columns={[1,null,2]}>

      <Container className="container">
  
        <Box p={"20px"} className="box"        >
          <Box className="content" backgroundImage='url(https://picsum.photos/id/1080/200/300) center/cover no-repeat' >
            <Heading fontStyle="italic" Size={['md',"lg", "xl", "2xl"]}>
              I'm&nbsp;Madhusainadh&nbsp;lalam
            </Heading>
            <Text mt={"50px"} fontStyle="italic" fontSize={['md',"lg", "xl", "2xl"]}>
            Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology.
            Passionate about implementing and launching new projects. Ability to translate business requirements into
            technical solutions. Looking to start my career as an entry-level software engineer with a firm driven by
            technology.
            </Text>
          </Box>
        </Box>
      </Container>
      <Container>
        <Image
          alt="gif"
          src={
            "https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"
          }
        />
      </Container>
      </SimpleGrid>
    </Box>
  );
}
