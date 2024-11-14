import React, { useState } from 'react';
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-scroll"



function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItem =[
        {
            id: 1,
            text: "Home",
        },
        {
            id: 2,
            text: "About",
        },
        {
            id: 3,
            text: "Portfolio",
        },
        {
            id: 4,
            text: "Skills",
        },
        {
            id: 5,
            text: "Contact",
        },
    ]

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 bg-white">
        <div className="w-full h-16 flex justify-between items-center">
            <div>
                <h1 className="font-bold text-4xl font-signature">jitendra.in</h1>
            </div>
            <div>
                <ul className="hidden md:flex md:space-x-8 text-xl">
                    {navItem.map(({id, text})=>(
                        <li key={id} className="hover:scale-110 duration-200 cursor-pointer">
                         <Link to={text} smooth={true} duration={500} offset={-70} activeClass="active">
                         {text}
                         </Link>   
                        </li>
                    ))}
                </ul>
                <div onClick={() => setMenu(!menu)} className="md:hidden">{menu? <AiOutlineClose size={30}/>:<HiOutlineMenu size={30}/>}</div>
            </div>
        </div>
        {menu && (
            <div className="bg-slate-700 max-w-screen-2xl container mx-auto h-screen z-99">
            <ul className="md:hidden h-screen flex justify-center items-center flex-col space-y-4">
                {navItem.map(({id, text})=>(
                    <li key={id} className="hover:scale-110 duration-200 cursor-pointer text-xl font-semibold">
                        <Link onClick={() => setMenu(!menu)} to={text} smooth={true} duration={500} offset={-70} activeClass="active" > 
                        {text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
        )}
    </div>
    </>
  )
}

export default Navbar
