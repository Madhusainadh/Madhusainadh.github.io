import { Box, Button, Container, Heading, Image, Img, Text } from "@chakra-ui/react";
import React from "react";
import "./Abouttext.css";
import back from "./pngback.png"
import {Link} from "react-scroll"

export default function Abouttext() {
  return (
    <Box className="body" pt={'100px'} id="About">
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
      <Container>
      <Image alt="gif" src={"https://cdn.dribbble.com/users/1162077/screenshots/3848914/programmer.gif"}/>
      </Container>
      <Button><Link to="skills" duration={1000} smooth={true}></Link></Button>

    </Box>
  );
}
