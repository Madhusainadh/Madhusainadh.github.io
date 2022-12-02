import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Productcard } from "./procectCard";
import "./Navbar.css";
import hellobonsai from "./HelloBonsai.png";
import hellobonsai1 from "./HelloBonsai1.png";
import hellobonsai2 from "./HelloBonsai2.png";
import hellobonsai3 from "./HelloBonsai3.png";
import hellobonsai4 from "./HelloBonsai4.png";
import Unsplash from "./Unsplash.png";
import Unsplash1 from "./Unsplash1.png";
import Unsplash2 from "./Unsplash2.png";
import Unsplash3 from "./Unsplash3.png";
import Unsplash4 from "./Unsplash4.png";
import chat from "./chat.png";
import chat1 from "./chat1.png";
import chat2 from "./chat2.png";
import chat3 from "./chat3.png";
import chat4 from "./chat4.png";
import chat5 from "./chat5.png";
import ComicaDigital1 from "./Comica-Digital1.png";
import ComicaDigital2 from "./Comica-Digital2.png";
import ComicaDigital3 from "./Comica-Digital3.png";
import ComicaDigital4 from "./Comica-Digital4.png";
import ComicaDigital5 from "./Comica-Digital5.png";
import tender0 from "./tender0.png";
import tender from "./tender.png";
import tender1 from "./tender1.png";
import tender2 from "./tender2.png";
import tender3 from "./tender3.png";
import tender4 from "./tender4.png";

import { motion } from "framer-motion";
export const Projects = () => {
  // https://github.com/Priyanshu-Tyagi/Myntra_Clone
  let content = [
    {
      id: 1,
      ProjectName: "ComicaDigital _Clone",
      Discprition:
        "Comicadigital offers its customers a delightful shopping experience and helps them in bringing home the latest & best technology at an unbeatable price. A collaborative project built by a team of 4 executed in 4 days.  ",
      Github: "https://github.com/pg570/ComicaDigital_website",
      Stacks: [" React", "Redux", "Express", " MongoDB", "Nodejs "],
      Live: "https://comicadigital.netlify.app/",
      slides: [
        ComicaDigital1,
        ComicaDigital2,
        ComicaDigital3,
        ComicaDigital4,
        ComicaDigital5,
      ],
    },
    {
      id: 2,
      ProjectName: "HelloBonsai_Clone",
      Discprition:
        "Hello, Bonsai is a freelancing management app. that offers freelance proposals and contracts. It handles your freelance invoices and payments. Acollaborative project built by a team of 5 executed in 4 days. Stacks that have used to build Hellobonsai websit are React, Redux, Express, MongoDB, Nodejs. ",
      Github: "https://github.com/AnkitParte/astute-line-8992",
      Stacks: [" React", "Redux", "Express", " MongoDB", "Nodejs "],

      Live: "https://astute-line-by-madhu-and-team.vercel.app/",
      slides: [
        hellobonsai,
        hellobonsai1,
        hellobonsai2,
        hellobonsai3,
        hellobonsai4,
      ],
    },
    {
      id: 3,
      ProjectName: "Tendercuts_Clone",
      Discprition:
        "Tendercut website is basically a meet ordering site they are delivered by the local shops freshelly. A collaborative project built by a team of 2 ",
      Github: "https://github.com/Madhusainadh/tendercuts_Clone",
      Stacks: [
        " React",
        "TypeScript",
        "Redux",
        "Express",
        " MongoDB",
        "Nodejs ",
      ],

      Live: "https://tendercut-clone-typescript.vercel.app/",
      slides: [tender0, tender1, tender2, tender3, tender4],
    },
    {
      id: 4,
      ProjectName: "Upsplash_Clone",
      Discprition:
        "Upsplash provide Free stock photos & videos you can use" +
        "everywhere. Browse millions of high-quality stock" +
        "images. A collaborative project built by a team of" +
        " 4 executed in 4 days. ",
      Github: "https://github.com/amitchouhan948/Unsplash-Project_U3",
      Stacks: [" HTML", "CSS", "JS", " JSON", "Nodejs "],

      Live: "https://tiny-chaja-dd6545.netlify.app/index.html",
      slides: [Unsplash, Unsplash1, Unsplash2, Unsplash3, Unsplash4],
    },
    {
      id: 5,
      ProjectName: "goExplore",
      Discprition:
        "goExplore is a chating webiste which can be use to communicat to each other through messages.",
      Github: "https://github.com/Madhusainadh/socialmedia",
      Stacks: ["Socket.io", " React", "express", "MongoDB", " Node.js"],

      Live: 0,
      slides: [chat, chat1, chat2, chat3, chat4, chat5],
    },
  ];

  return (
    <motion.Box
      pt={"50px"}
      bg={"black"}
      color="white"
      id="Projects"
      initial="hidden"
      animate="visible"
    >
      <motion.Box>
        <Heading
          bg={"black"}
          color="white"
          style={{ fontFamily: "sans-serif" }}
          as="h2"
          size={["xl", "2xl", "3xl"]}
          p={"30px"}
          className="glow"
          contentEditable="true"
        >
          Projects
        </Heading>
      </motion.Box>
      {content.map((e) => (
        <motion.div>
          <Productcard e={e} />
        </motion.div>
      ))}
    </motion.Box>
  );
};
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
