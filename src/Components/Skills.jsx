import { Box, Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { SiChakraui } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTsnode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io";
import { SiCsswizardry } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import "./Navbar.css"
import { ContextScroll } from './Contextscrol';

export default function Skills() {
  // const {toSkills,SkillSection} = useContext(ContextScroll)
  return (
    <selection id="skills">
    <Box  p={'100px'} bg={'black'} display="flex" justifyContent={'center'}>
  
    <Box w={'1000px'}  id="skills" >
    <Heading

              style={{ fontFamily: "sans-serif" }}
              as="h2"
              size={[ "xl", "2xl", "3xl"]}
              p={'30px'}
              className="glow"
              contentEditable="true"
            >
           My Skills
            </Heading>
    <SimpleGrid  columns={[ 2,3, 5]} spacing='40px' >
    <Box color={'white'} className="hover">
    <VStack>
    <SiMongodb  size={100}/>
    <Text fontSize={"xl"} >Mongodb</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiExpress  size={100}/>
    <Text fontSize={"xl"} >Express.js</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover" >
    <VStack>
    <FaReact  size={100}/>
    <Text fontSize={"xl"} >React.js</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <DiNodejs  size={100}/>
    <Text fontSize={"xl"} >Node.js</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiRedux  size={100}/>
    <Text fontSize={"xl"} >Redux</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiTsnode  size={100}/>
    <Text fontSize={"xl"} >TypeScript</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <IoLogoHtml5  size={100}/>
    <Text fontSize={"xl"} >Html</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover" >
    <VStack>
    <SiCsswizardry  size={100}/>
    <Text fontSize={"xl"} >Css</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiChakraui  size={100}/>
    <Text fontSize={"xl"} >Chakra_ui</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiJavascript  size={100}/>
    <Text fontSize={"xl"} >JavaScript</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <FaAws  size={100}/>
    <Text fontSize={"xl"} >AWS</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <SiMysql  size={100}/>
    <Text fontSize={"xl"} >Mysql</Text>
    </VStack>
    </Box>
    <Box color={'white'} className="hover">
    <VStack>
    <FaGitAlt  size={100}/>
    <Text fontSize={"xl"} >Github</Text>
    </VStack>
    </Box>
  </SimpleGrid>
  </Box>
    </Box>
    </selection>
  )
}
