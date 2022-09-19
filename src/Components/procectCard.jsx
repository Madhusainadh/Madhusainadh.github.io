import React from 'react'
import { Box, Flex, Link, chakra, Image } from "@chakra-ui/react";

export const Productcard = ({e}) => {
  console.log({...e})
  return (
<Flex
      bg="Black"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="Black"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
      
          >
          <Image bgSize="cover" h={{ base: 64, lg: "full" }}  rounded={{ lg: "lg" }} src={e.Image?e.Image:'https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'} />
          </Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="White"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            {e.ProjectName}
            <chakra.span color="brand.600" _dark={{ color: "brand.400" }}>
              
            </chakra.span>
          </chakra.h2>
          <chakra.p mt={4} color="white" _dark={{ color: "white" }}>
            {e.Discprition}
          </chakra.p>
<Flex justifyContent={"space-around"}>
          <Box mt={8}>
         
            <Link
              bg="gray.900"
              color="white"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
             href={e.Github}
             isExternal
            >
              Project code
            </Link>
            
          </Box>
          <Box mt={8}>
          
          <Link
            bg="gray.900"
            color="gray.100"
            px={5}
            py={3}
            fontWeight="semibold"
            rounded="lg"
            _hover={{ bg: "gray.800" }}
            href={e.Live}
            isExternal
          >
           Live code
          </Link>
          
        </Box>
        </Flex>
        </Box>
      </Box>
    </Flex>  )
}
