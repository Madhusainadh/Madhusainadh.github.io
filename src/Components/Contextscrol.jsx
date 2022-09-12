import React, {  createContext, useRef } from 'react'

export  const ContextScroll = createContext()

export default function Contextscrolprovider({Children}) {

const SkillSection = useRef(null)

const toSkills=()=>{
    window.scrollTo({
        top:SkillSection.current.offsetTop,
        behavior:"smooth"
    })
}
console.log(SkillSection)
  return (
    <div>
      <ContextScroll.Provider value={{SkillSection,toSkills}}>
      {Children}
      </ContextScroll.Provider>
    </div>
  )
}
