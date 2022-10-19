import { Box } from '@chakra-ui/react'
import React from 'react'
import About from './About'
import Abouttext from './Abouttext'
import Email from './Email'
import GitHubcal from './GitHubcal'
import Navbar from './Navbar'
import { Projects } from './Projects'
import Skills from './Skills'

export default function Home() {
  return (
    <Box bg={"black"}>
    <Navbar/>
    <About/>
    <Abouttext/>
    <Skills/>
    <GitHubcal/>
    <Projects/>
    <Email/>
    
    </Box>
  )
}
