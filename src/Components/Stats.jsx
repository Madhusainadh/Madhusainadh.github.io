import { Box, Container, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";

export const Stats = () => {
  return (
    <Box>
      <Stack color={"white"} p={"50px"} mt={"-100px"} bg={"black"}>
        <Flex justifyContent={"center"} p={"10px"}>
          <Image
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Madhusainadh&show_icons=true&locale=en&layout=compact&theme=prussian"
            alt="Madhusainadh"
          />
        </Flex>
        <Flex justifyContent={"center"} p={"10px"}>
          <Image
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Madhusainadh&theme=prussian"
            alt="Madhusainadh"
          />
        </Flex>
      {/**  <Flex justifyContent={"center"} p={"10px"}>
          <Image
            alt="Madhusainadh"
            align="center"
            src={
              "https://activity-graph.herokuapp.com/graph?username=Madhusainadh&&theme=xcode"
            }
          />
        </Flex>*/} 
      </Stack>
    </Box>
  );
};
