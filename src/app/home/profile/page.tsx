"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/svgexport-24.svg"
import testp from "../../../../public/test p.jpg"
import loadingLogo from "../../../../public/images/veegram logos/svgexport-21.svg"
import { AiOutlineSearch } from "react-icons/ai"
import { FaCaretDown } from "react-icons/fa";
import { IoPersonAddOutline } from "react-icons/io5";
import { RiMessage3Line } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import SlideBarOne from "../sidebar/page";

export default function ProfilPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);
  return (
    <>
      {
      loading ?
      <>
            <div className="w-full h-full bg-[#FFF7F2] flex justify-center items-center pt-[309px] pb-[309px] md:pt-[309px] md:pb-[309px] lg:pt-[309px] lg:pb-[309px] px-10 md:px-0 lg:px-0">
              <Image src={loadingLogo} alt="Loading......" width={400} height={100} />
            </div>
          </> :<section className="w-full h-full">
     <nav className="shadow-sm fixed top-0 left-0 right-0">
      <header className="w-full bg-[#FFF7F2] pb-4">
        <div className="flex justify-between items-center pt-4 pr-8">
          <div className="ml-12 flex">
            <Image src={logo} alt="" width={120}/>
          <div className="flex items-center justify-center ml-24 bg-[#E8E8E8] pl-2 pr-2 h-[40px] rounded-lg">
            <input type="text" placeholder="Search"  className="bg-[#E8E8E8] focus:outline-none pr-8"/>
            <AiOutlineSearch className="flex items-center justify-center text-[20px]"/>
          </div>
          </div>
          <div className="flex justify-center items-center">
          <IoPersonAddOutline className="text-[26px] mr-4 cursor-pointer"/>
          <RiMessage3Line  className="text-[29px] mr-4 cursor-pointer"/>
          <IoMdNotificationsOutline className="text-[29px] mr-4 cursor-pointer"/>
          <Image src={testp} alt="" width={35} className="rounded-[50%] mr-1 cursor-pointer"/>
          <FaCaretDown className="cursor-pointer"/>
          </div>
        </div>
      </header>
      </nav>
      <div className="flex mt-[73px]">
          <SlideBarOne/>
          <div className="w-[83%] h-full ml-[17%] bg-[#E8E8E8]">
            <div className="flex justify-center">
                <div>
                  div
                </div>
            </div>
          </div>
      </div>
     </section>
       }
    </>
  )
}
