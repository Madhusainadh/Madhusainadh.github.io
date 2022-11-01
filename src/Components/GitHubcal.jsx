// import React from 'react'
// import GitHubCalendar from 'github-calendar';


// const GitHubcal = () => {
//   return (
//     <div>
//       <GitHubCalendar 
//       username="madhusainadh"
//       />
//     </div>
//   )
// }

// export default GitHubcal
// import React from 'react'
import { Box, Heading, Image } from '@chakra-ui/react';
import React from 'react';
// import {ScriptTag} from "react-script-tag"
// import GitHubCalendar from "github-calendar"
import Typewriter from "typewriter-effect";
import GitHubCalendar from "react-github-calendar"

const GitHubcal = () => {
  
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b8",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  return (
    <Box  color={"white"} p={"50px"}   bg={"black"}  >
     <Heading     bg={"black"} style={{ fontFamily: "sans-serif" }}
    as={"h2"}
     size={[ "xl", "2xl", "xl"]}
    contentEditable="true"
    color={"white"}
    >

  <Typewriter

  onInit={(typewriter)=> {

  typewriter
  .start()
  .typeString("GITHUB ACTIVITY")
  .pauseFor(2000)
  .deleteAll()
  .typeString("GITHUB ACTIVITY")
  .start()
  }}
  />

   </Heading>
    <Box display={"flex"} justifyContent={"center"} mt={"30px"} mb={"105px"}>
      <GitHubCalendar
        username="Madhusainadh"
        blockSize={15}
        blockMargin={5}
        responsive="true"
        fontSize={16}
      />
    </Box>
      </Box>
  )
  }

  export default GitHubcal
 
  
    
 