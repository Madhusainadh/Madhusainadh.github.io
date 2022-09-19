import React from 'react'
import About from './About'
import Abouttext from './Abouttext'
import Email from './Email'
import Navbar from './Navbar'
import { Projects } from './Projects'
import Skills from './Skills'

export default function Home() {
  return (
    <div>
    <Navbar/>
    <About/>
    <Abouttext/>
    <Skills/>
    <Projects/>
    <Email/>
    
    </div>
  )
}
