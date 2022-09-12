import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Navbar.css"
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { Formik } from "formik";
export default function Email() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9z2c95q",
        "template_jac2s34",
        form.current,
        "gYCaSBZweLq0zruEE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email sent sucessfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="Contact me" style={{ fontFamily: "sans-serif" }} color={"white"} bg={"black"}>
      <Flex pt={"50px"}>
        <Container  >
          <form ref={form} onSubmit={sendEmail}>
            <FormControl>
              <FormLabel fontSize={"20px"}>Enter your name</FormLabel>
              <Input
                fontSize={"20px"}
                h={"50px"}
                placeholder="Enter your name"
                type="text"
                name="user_name"
              />
              <FormLabel fontSize={"20px"}>Email address</FormLabel>
              <Input
                fontSize={"20px"}
                h={"50px"}
                placeholder="Enter your email"
                type="email"
                name="user_email"
              />
              <FormLabel fontSize={"20px"}>Message</FormLabel>
              <Textarea
                fontSize={"20px"}
                placeholder="Enter message"
                name="message"
              />{" "}
              <FormHelperText>We'll never share your email.</FormHelperText>
              <Button mt={4} colorScheme="teal" type="submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </Container>
        <Container  >
          <VStack gap={35}>
            <Heading
              style={{ fontFamily: "sans-serif" }}
              as="h2"
              size={["lg", "xl", "2xl", "3xl"]}
            >
              Let's connect
            </Heading>

            <Box h={"10px"} className="hover">
              <HStack>
                <spam>
                  <HiMail size={30} />
                </spam>
                <Text  fontSize={['md',"lg", "xl", "2xl"]}>
                  lalammadhusainadh150@gmail.com
                </Text>
              </HStack>
            </Box>
            <Box h={"10px"} className="hover">
              <HStack>
                <spam>
                  <CgPhone size={30} />
                </spam>
                <Text fontSize={['md',"lg", "xl", "2xl"]}>
                  +91 6303469572
                </Text>
              </HStack>
            </Box>
            <Box h={"10px"} className="hover">
              <HStack>
                <spam>
                  <AiOutlineLinkedin size={30} />
                </spam>
                <Text fontSize={['md',"lg", "xl", "2xl"]}>
               <a href="https://www.linkedin.com/in/madhusainadh-lalam-aba64b204/">https://www.linkedin.com/in/madhusainadh</a> 
                </Text>
              </HStack>
            </Box>
            <Box h={"10px"} className="hover">
            <HStack>
              <spam>
                <BsGithub size={30} />
              </spam>
              <Text fontSize={["lg", "xl", "2xl"]}>
             <a href="https://github.com/Madhusainadh">https://github.com/Madhusainadh</a> 
              </Text>
            </HStack>
          </Box>
          </VStack>
        </Container>
      </Flex>
    </Box>
  );
}
