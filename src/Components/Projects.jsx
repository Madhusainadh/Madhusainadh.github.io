import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'
import { Productcard } from './procectCard'
import "./Navbar.css"
import hellobonsai from "./HelloBonsai.png"
import { motion } from "framer-motion";
export const Projects = () => {


    // https://github.com/Priyanshu-Tyagi/Myntra_Clone
    let content =[
      {
        id:1,
        ProjectName:"HelloBonsai_Clone",
        Discprition:"On this project total of 5 people worked as a team and were able to complete 70% of this project in 5 days. we used MongoDB, Express, React, Node.js, redux, and chakra_ui. My role in this project is to complete the Dashboard page which includes NavBar, Clint_page,Project_page, Tasks_page,and Timetraking_page.",
        Github:"https://github.com/AnkitParte/astute-line-8992",
        Live:"https://astute-line-by-madhu-and-team.vercel.app/",
        Image:hellobonsai,
    },{
            id:2,
            ProjectName:"Upsplash_Clone",
            Discprition:"On this project total of 5 people worked as a team and completed this website"+
          "in 4 days. We used HTML CSS javascript and JSON for the backend to complete this project. we used API to"+
            "fetch the data into the pages. My role in this Project is to complete Blog_page and every single page inside that page.",
            Github:"https://github.com/amitchouhan948/Unsplash-Project_U3",
            Live:"https://tiny-chaja-dd6545.netlify.app/index.html"
        },{
            id:3,
            ProjectName:"Myntra_Clone",
            Discprition:"On this project, 6 people worked as a team, the technologies that we used are HTML, CSS, and JS, and we took the help of local storage to store the data in the backend. My role in this project is to Build home page and navbar of the website. ",
            Github:"https://github.com/Priyanshu-Tyagi/Myntra_Clone",
            Live:"https://scintillating-jelly-fdc7ef.netlify.app/",
            Image:"https://techcrunch.com/wp-content/uploads/2014/01/screen-shot-2014-01-31-at-14-36-35.png?w=730&crop=1",
        },
    ]


  return (

    <motion.Box pt={"50px"}  bg={"black"} color="white" id="Projects"  
   
    initial="hidden"
    animate="visible"
    >
    <motion.Box><Heading
    bg={"black"} color="white"
    style={{ fontFamily: "sans-serif" }}
    as="h2"
    size={[ "xl", "2xl", "3xl"]}
    p={'30px'}
    className="glow"
    contentEditable="true"
  >
  
    Projects
  </Heading></motion.Box>
    {
        content.map((e)=>
        <motion.div  >
        <Productcard e={e} />
        </motion.div>
        )
    }
    </motion.Box>
  )
}
// import {React} from "react";
// import { motion } from "framer-motion";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1
//   }
// };

// export const Projects = () => {
//   let content =[
//           {
//             id:1,
//             ProjectName:"HelloBonsai_Clone",
//             Discprition:"On this project total of 5 people worked as a team and were able to complete 70% of this project in 5 days. we used MongoDB, Express, React, Node.js, redux, and chakra_ui. My role in this project is to complete the Dashboard page which includes NavBar, Clint_page,Project_page, Tasks_page,and Timetraking_page.",
//             Github:"https://github.com/AnkitParte/astute-line-8992",
//             Live:"https://astute-line-by-madhu-and-team.vercel.app/",
//             Image:hellobonsai,
//         },{
//                 id:2,
//                 ProjectName:"Upsplash_Clone",
//                 Discprition:"On this project total of 5 people worked as a team and completed this website"+
//               "in 4 days. We used HTML CSS javascript and JSON for the backend to complete this project. we used API to"+
//                 "fetch the data into the pages. My role in this Project is to complete Blog_page and every single page inside that page.",
//                 Github:"https://github.com/amitchouhan948/Unsplash-Project_U3",
//                 Live:"https://tiny-chaja-dd6545.netlify.app/index.html"
//             },{
//                 id:3,
//                 ProjectName:"Myntra_Clone",
//                 Discprition:"On this project, 6 people worked as a team, the technologies that we used are HTML, CSS, and JS, and we took the help of local storage to store the data in the backend. My role in this project is to Build home page and navbar of the website. ",
//                 Github:"https://github.com/Priyanshu-Tyagi/Myntra_Clone",
//                 Live:"https://scintillating-jelly-fdc7ef.netlify.app/",
//                 Image:"https://techcrunch.com/wp-content/uploads/2014/01/screen-shot-2014-01-31-at-14-36-35.png?w=730&crop=1",
//             },
//         ]
//   return(
//     <motion.ul
//     className="container"
//     variants={container}
//     initial="hidden"
//     animate="visible"
//   >
//     {[0, 1, 2, 3].map((index) => (
//       <motion.li key={index} className="item" variants={item} />
//     ))}
//   </motion.ul>
//   )
//   }

