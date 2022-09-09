import React from "react";
import "./Navbar.css"
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
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Logo } from "@choc-ui/logo";

export default function Navbar() {
  const bg = useColorModeValue("Black", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <div >
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
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" color="white">
            Madhusainadh
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="blue"
              display={{
                base: "none",
                md: "inline-flex",
              }}
            >
              <Button  variant='ghost' >Skills</Button>
              <Button variant="ghost" >Projects</Button>
              <Button variant="ghost" >Contact me</Button>
              <Button variant="ghost" >About</Button>
              
            </HStack>
            <Button colorScheme="brand" size="sm">
              Download Resume
            </Button>
            <Box
              display={{
                base: "inline-flex",
                md: "none",
              }}
            >
              <IconButton
                display={{
                  base: "flex",
                  md: "none",
                }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{
                  color: "inherit",
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
                  Skills
                </Button>
                <Button w="full" colorScheme="brand" variant="ghost">
                  Projects
                </Button>
                <Button w="full"  colorScheme="brand" variant="ghost">
                  About
                </Button>
                <Button w="full" colorScheme="brand" variant="ghost">
                  Contact me
                </Button>
               
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </div>
  );
}