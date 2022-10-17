import React, { useContext } from "react";
import "./Navbar.css";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  Heading,
} from "@chakra-ui/react";
import madhu from "../Madhusainadh_Lalam.pdf";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";
import { ContextScroll } from "./Contextscrol";
import { Link } from "react-scroll";
export default function Navbar() {
  // const {toSkills} = useContext(ContextScroll)

  const bg = useColorModeValue("Black", "gray.800");
  const mobileNav = useDisclosure();
  let mdhu = "< Madhusainadh />";
  return (
    <Box className="navtop">
      <chakra.header
        bg={bg}
        w="full"
        px={{
          base: 2,
          sm: 4,
        }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo />
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1
              style={{ cursor: "pointer" }}
              fontSize="xl"
              fontWeight="medium"
              ml="2"
              color="white"
            >
              <Heading fontSize={"xl"}>
                <Link to="me" spy={true} smooth={true} duration={1000}>
                  {" "}
                  {mdhu}
                </Link>
              </Heading>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="#87CEEB "
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button colorScheme="brand" variant="ghost">
                <Link to="skills" spy={true} smooth={true} duration={1000}>
                  {" "}
                  Skills
                </Link>
              </Button>
              <Button colorScheme="brand" variant="ghost">
                <Link to="Projects" spy={true} smooth={true} duration={1000}>
                  {" "}
                  Projects
                </Link>
              </Button>
              <Button colorScheme="brand" variant="ghost">
                <Link to="Contact me" spy={true} smooth={true} duration={1000}>
                  {" "}
                  Contact me
                </Link>
              </Button>
              <Button colorScheme="brand" variant="ghost">
                <Link to="About" spy={true} smooth={true} duration={1000}>
                  {" "}
                  About
                </Link>
              </Button>
            </HStack>
            <Button colorScheme="brand" size="sm">
              <a href={madhu} download="Madhusainadh">
                {" "}
                Download Resume
              </a>
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                colorScheme="brand"
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="white"
                _dark={{
                  color: "white",
                }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
                color="white"
                style={{ opacity: 11 }}
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" colorScheme="brand" variant="ghost">
                  <Link to="skills" spy={true} smooth={true} duration={1000}>
                    {" "}
                    Skills
                  </Link>
                </Button>
                <Button w="full" colorScheme="brand" variant="ghost">
                  <Link to="Projects" spy={true} smooth={true} duration={1000}>
                    Projects
                  </Link>
                </Button>
                <Button w="full" colorScheme="brand" variant="ghost">
                  <Link to="About" spy={true} smooth={true} duration={1000}>
                    About
                  </Link>
                </Button>
                <Button w="full" colorScheme="brand" variant="ghost">
                  <Link
                    to="Contact me"
                    spy={true}
                    smooth={true}
                    duration={1000}
                  >
                    Contact me
                  </Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  );
}
