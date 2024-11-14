import React from 'react'
import Project1 from "../../public/computer.png"
import Project2 from "../../public/database-storage.png"
import Project3 from "../../public/landing-page.png"
import Project4 from "../../public/news.png"
import Project5 from "../../public/website.png"

function Porfolio() {
    const cards = [
        {
            id:1,
            logo:Project1,
            name:"Javascirpt",
        },
        {
            id:2,
            logo:Project2,
            name:"Javascirpt",
        },
        {
            id:3,
            logo:Project3,
            name:"Javascirpt",
        },
        {
            id:4,
            logo:Project4,
            name:"Javascirpt",
        },
        {
            id:5,
            logo:Project5,
            name:"Javascirpt",
        },
    ]

  return (
    <>
      <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-16 mt-16">
        <h1 className="text-4xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">My Projects</span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
            {cards.map(({id, logo, name})=>(
                <div key={id} className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300">
                    <img src={logo} alt="Project Image" className="w-[120px] h-[120px] p-1 rounded-lg" />
                    <div>
                        <div className="font-bold text-lg mb-2 px-2">{name}</div>
                        <p className="px-2 text-gray-700">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, nam.</p>
                    </div>
                    <div className="px-4 py-4 space-x-3">
                        <button className="border-[2px] py-2 px-4 rounded-xl bg-green-600 hover:bg-green-900 hover:text-white shadow-lg">Website</button>
                        <button className="border-[2px] py-2 px-4 rounded-xl bg-blue-600 hover:bg-blue-900 hover:text-white shadow-lg">Source Code</button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Porfolio
