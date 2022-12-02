import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Link,
  chakra,
  Image,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
export const Productcard = ({ e }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = e.slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  // console.log({ ...e });
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
        <Flex justifyContent={"center"} w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
          >
            <Flex
              w="full"
              _dark={{ bg: "#3e3e3e" }}
              p={10}
              justifyContent="center"
            >
              <Box overflow="hidden">
                <Flex w="full" {...carouselStyle}>
                  {e.slides.map((slide, sid) => (
                    <Box
                      key={`slide-${sid}`}
                      flex="none"
                      boxSize="full"
                      shadow="md"
                      display={"flex"}
                      justifyContent="center"
                    >
                      <Image
                        src={slide}
                        alt="carousel image"
                        // boxSize="full"
                        bgSize="cover"
                        h="64"
                        w={{ base: "xl" }}
                        rounded={"lg"}
                      />
                    </Box>
                  ))}
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Flex>

        <Box
          display={"flex"}
          justifyContent="center"
          py={12}
          px={6}
          // maxW={{ base: "xl", lg: "5xl" }}
          w={{ lg: "50%" }}
        >
          <Box>
            <chakra.h2
              fontSize={{ base: "2xl", md: "3xl" }}
              color="White"
              _dark={{ color: "white" }}
              fontWeight="bold"
            >
              {e.ProjectName}
              <chakra.span
                color="brand.600"
                _dark={{ color: "brand.400" }}
              ></chakra.span>
            </chakra.h2>
            <chakra.p mt={4} color="white" _dark={{ color: "white" }}>
              {e.Discprition}
            </chakra.p>
            <Box textAlign={"start"}>
              <chakra.span
                textAlign={"start"}
                color="white"
                fontSize={"bold"}
                _dark={{ color: "white.400" }}
                p={"20px"}
              >
                {" "}
                <chakra.span
                  fontSize={{ base: "20px", md: "30px" }}
                  color={"#216e39"}
                  pr={"5px"}
                >
                  Stacks
                </chakra.span>
                that have used to build{" "}
                <chakra.span color={"#30a14e"}>{e.ProjectName}</chakra.span>{" "}
              </chakra.span>
            </Box>
            <SimpleGrid gap={"10px"} columns={[3, 3, 3]}>
              {e.Stacks
                ? e.Stacks.map((e) => (
                    <Box
                      bg="bule.900"
                      color="gray.100"
                      fontWeight="semibold"
                      rounded="lg"
                      border
                      isExternal
                    >
                      {e}
                    </Box>
                  ))
                : ""}
            </SimpleGrid>
            <SimpleGrid columns={[1, 2, 2, 2]} justifyContent={"space-around"}>
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
           {(e.Live!==0)?<Box mt={8}>
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
         </Box>:<></>}
              
            </SimpleGrid>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
