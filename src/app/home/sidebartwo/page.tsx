"use client"
import React from 'react'
import "./resona.css"
import Link from 'next/link'

export default function SlideBarTwo() {
  return (
    <>
      <div className='w-[28%] pr-14'>
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

          <div className='underline text-right mt-2 text-[#621E72]'><Link href=''>All Friends</Link></div>
        </section>
      </div>
    </>
  )
}
