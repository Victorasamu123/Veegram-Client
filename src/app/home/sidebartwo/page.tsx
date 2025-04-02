"use client"
import React from 'react'
import "./resona.css"
import Link from 'next/link'
import { FiUserPlus } from "react-icons/fi";

export default function SlideBarTwo() {
  return (
    <>
      <div className='w-[28%] pr-14 fixed right-0'>
       <p className='text-[#525264] text-[19px] mt-10 ml-8'>FRIENDS</p>
        <section className='ml-8 mt-6' id='friends'>
          <div className='flex justify-between'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanOneOf'></span>
            <p className='mt-3 ml-3'>Sara Madoza</p>
            </div>
            <p className='text-[10px] mt-4'>10 min</p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanTwoOf'></span>
            <p className='mt-3 ml-3'>Nancy lee</p>
            </div>
            <p className='w-[11px] h-[11px] bg-[#621E72] mt-4 rounded-full'></p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanThreeOf'></span>
            <p className='mt-3 ml-3'>Nick Powell</p>
            </div>
            <p className='w-[11px] h-[11px] bg-[#621E72] mt-4 rounded-full'></p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanFourOf'></span>
            <p className='mt-3 ml-3'>Alex Freeman</p>
            </div>
            <p className='w-[11px] h-[11px] bg-[#621E72] mt-4 rounded-full'></p>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanFiveOf'></span>
            <p className='mt-3 ml-3'>Suhyeon Choi</p>
            </div>
            <p className='w-[11px] h-[11px] bg-[#621E72] mt-4 rounded-full'></p>
          </div>

          <div className='underline italic text-right mt-2 text-[#621E72]'><Link href=''>All Friends</Link></div>
        </section>
        <p className='text-[#525264] text-[19px] mt-10 ml-8'>Add Friends</p>
        <section className='ml-8 mt-4'>
        <div className='flex justify-between'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanOfAddF'></span>
            <p className='mt-3 ml-3'>Kelly Powell</p>
            </div>
            <button className='bg-[#621E72] w-14 h-8 flex justify-center items-center rounded-md mt-1'>
            <FiUserPlus className='text-[18px] text-white '/>
            </button>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanOfAddFT'></span>
            <p className='mt-3 ml-3'>Prince Akashi</p>
            </div>
            <button className='bg-[#621E72] w-14 h-8 flex justify-center items-center rounded-md mt-1'>
            <FiUserPlus className='text-[18px] text-white '/>
            </button>
          </div>

          <div className='flex justify-between mt-4'>
            <div className='flex'>
            <span className='w-[45px] border-[#621E72] border-[1px] spanOfAddFTt'></span>
            <p className='mt-3 ml-3'>Promise Adekunle</p>
            </div>
            <button className='bg-[#621E72] w-14 h-8 flex justify-center items-center rounded-md mt-1'>
            <FiUserPlus className='text-[18px] text-white '/>
            </button>
          </div>

          <div className='italic underline text-right mt-2 text-[#621E72]'><Link href=''>See All</Link></div>
        </section>
      </div>
    </>
  )
}
