import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 mb-4 md:mb-0 md:px-16">
            <div className="flex flex-col justify-center items-center">
                <ul className="flex justify-center items-center gap-4">
                    <li>
                      <a href="https://www.instagram.com/_jitendra._dev_/" target="_blank">
                        <FaInstagram size={30} className="cursor-pointer"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/918511525626" target="_blank">
                        <FaWhatsapp size={30} className="cursor-pointer"/>
                      </a>
                    </li>
                    <li>
                      <a href="http://t.me/jitendrachaudhari02" target="_blank">
                        <FaTelegram size={30} className="cursor-pointer"/>
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/jitendraC2255" target="_blank">
                        <FaXTwitter size={30} className="cursor-pointer"/>
                      </a>
                    </li>  
                </ul>
                <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col justify-center items-center ">
                    <p>
                        Jitendra.dev&copy; All rights are reserved.
                    </p>
                    <p>Thanks For Visiting 😊 </p>
                </div>
            </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
