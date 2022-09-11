import { Box, Container, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import "./Abouttext.css";
import back from "./pngback.png"
export default function Abouttext() {
  return (
    <Box className="body" pt={'100px'}>
      <Container  className="container">
      <Img  h={"800px"}  src={back} alt="backgroundimg"  style={{position:"absolute"}}></Img>
        <Box p={'20px'} className="box" style={{position:"relative"}} >
          <Box   className="content" >
            <Heading  Size={[ "2xl", "3xl"]}>I'm&nbsp;Madhusainadh&nbsp;lalam</Heading>
            <Text mt={'50px'} fontSize={["lg", "xl", "2xl"]}>
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology. Looking forward to applying
              and enhancing my skills and knowledge as a developer.
            </Text>
          </Box>
        </Box>
      </Container>
      
    </Box>
  );
}
