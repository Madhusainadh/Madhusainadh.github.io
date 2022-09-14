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
    <Box className="body" pt={"100px"} id="About">
    <SimpleGrid pt={"50px"} gap={"60px"} columns={[1,null,2]}>

      <Container className="container">
        <Img
          h={['md',"lg", "xl", "2xl"]}
          src={back}
          alt="backgroundimg"
          style={{ position: "absolute" }}
        ></Img>
        <Box p={"20px"} className="box" style={{ position: "relative" }}>
          <Box className="content">
            <Heading Size={['md',"lg", "xl", "2xl"]}>
              I'm&nbsp;Madhusainadh&nbsp;lalam
            </Heading>
            <Text mt={"50px"} fontSize={['md',"lg", "xl", "2xl"]}>
              Quick learner and an aspiring full-stack web developer with core
              knowledge of MERN stack technology. Looking forward to applying
              and enhancing my skills and knowledge as a developer.
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
