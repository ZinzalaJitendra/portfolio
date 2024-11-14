import React from 'react'
import Html5 from "../../public/html-5.png"
import CSS from "../../public/css-3.png"
import Js from "../../public/icons8-javascript-100.png"
import Tailwind from "../../public/tailwind.png"
import Reactjs from "../../public/reactjs.png"
import Github from "../../public/github.png"


function Skills() {
    const logos = [
        {
            id:1,
            logo:Html5,
            name:"HTML5",
        },
        {
            id:2,
            logo:CSS,
            name:"CSS3",
        },
        {
            id:3,
            logo:Js,
            name:"Javascirpt",
        },
        {
            id:4,
            logo:Tailwind,
            name:"Tailwind CSS",
        },
        {
            id:5,
            logo:Reactjs,
            name:"React Js",
        },
        {
            id:6,
            logo:Github,
            name:"Github",
        },
    ]
    

  return (
    <>
      <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-16 mt-16">
        <h1 className="text-4xl font-bold mb-5">Skills</h1>
        <span>I have knowledge of these skill.</span>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 my-5">
            {logos.map(({id, logo, name})=>(
                <div key={id} className="flex items-center justify-center shadow-lg flex-col rounded-full border-[2px] md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300 space-y-4">
                    <img src={logo} alt="Project Image" className="w-[100px] md:w-[130px]" />
                    <div>
                        <div className="">{name}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Skills
