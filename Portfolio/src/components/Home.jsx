import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/jite.jpg";


function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20 mb-8">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 space-y-2 mt-12 md:mt-24 order-2 md:order-1">
            <span className="text-xl">Welcome in my Feed</span>
            <div className="flex flex-col lg:flex-row lg:space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped className="text-red-700 font-bold"
              strings={["Developer", "Coder", "Programmer"]} 
              typeSpeed={40}
              backSpeed={50}
              loop
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              delectus! Porro eum perferendis, ea minima quos cum totam!
              Pariatur eos mollitia quos ipsa aut sapiente, quis ea cumque ipsam
              accusamus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Aut ea culpa, assumenda suscipit hic nihil sapiente
              voluptate iure nam blanditiis?
            </p>
            <br />
            {/*Media icons */}
            <div className="flex justify-between items-center  flex-col md:flex-row">
              <div className="space-y-2 flex flex-col items-center mt-5 md:items-start" >
                <h2 className="font-bold">Available on</h2>
                <ul className="flex space-x-5 ">
                    <li>
                      <a href="https://www.linkedin.com/in/jitendra-zinzala-44b193238/" target="_blank">
                        <FaLinkedin size={20} className="cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://github.com/ZinzalaJitendra" target="_blank">
                        <FaGithub size={20} className="cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="" target="_blank">
                        <FaInstagram size={20} className="cursor-pointer" />
                      </a> 
                    </li>
                </ul>
              </div>
              <div className="space-y-2 flex flex-col mt-5 items-center md:items-start">
                <h2 className="font-bold">Currently working on</h2>
                <ul className="flex space-x-5 ">
                    <li>
                      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                        <FaJsSquare size={20} className="cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://tailwindcss.com/" target="_blank">
                        <SiTailwindcss size={20} className="cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a href="https://react.dev/" target="_blank"> 
                        <FaReact size={20} className="cursor-pointer" />
                      </a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-5 lg:ml-48 lg:mt-20 order-1 mt-8">
          <img src={pic} alt="Personal Image" className="rounded-full object-cover md:w-[780px] md:h-[780px]" />
          </div>
        </div>
      </div>
      <br />
      <hr />
    </>
  );
}

export default Home;
