import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Productcard } from './procectCard'
import "./Navbar.css"

export const Projects = () => {

    // https://github.com/Priyanshu-Tyagi/Myntra_Clone
    let content =[
        {
            id:1,
            ProjectName:"Upsplash_Clone",
            Discprition:"On this project total of 5 people worked as a team and did this website"+
           " in 4 days We used HTML CSS and javascript and JSON for the backend to complete this project"
            +"we used API to fetch the data into the pages",
            Github:"https://github.com/amitchouhan948/Unsplash-Project_U3",
            Live:"https://tiny-chaja-dd6545.netlify.app/index.html"
        },{
            id:2,
            ProjectName:"Myntra_Clone",
            Discprition:"On this project, 6 people worked as a team, the technologies that we used are HTML, CSS, and JS, and we took the help of local storage to store the data in the backend.",
            Github:"https://github.com/Priyanshu-Tyagi/Myntra_Clone",
            Live:"https://scintillating-jelly-fdc7ef.netlify.app/",
            Image:"https://techcrunch.com/wp-content/uploads/2014/01/screen-shot-2014-01-31-at-14-36-35.png?w=730&crop=1",
        }
    ]


  return (

    <Box pt={"50px"}  bg={"black"} color="white" id="Projects">
    <Box><Heading

    style={{ fontFamily: "sans-serif" }}
    as="h2"
    size={[ "xl", "2xl", "3xl"]}
    p={'30px'}
    className="glow"
    contentEditable="true"
  >
    Projects
  </Heading></Box>
    {
        content.map((e)=>
        <div>
        <Productcard e={e} />
        </div>
        )
    }
    </Box>
  )
}
