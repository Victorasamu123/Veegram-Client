"use client"
import Image from 'next/image'
import storyOne from "../../../../public/people-images/jessica-felicio-nIKCy5CWIzk-unsplash (1).jpg"
import storyTwo from "../../../../public/people-images/caroline-hernandez-5BKUtjC7O6A-unsplash (1).jpg"
import storyThree from "../../../../public/people-images/caleb-ekeroth-wSBQFWF77lI-unsplash (1).jpg"
import storyFour from "../../../../public/people-images/caique-nascimento-C5NOq1BKlAk-unsplash (1).jpg"
import storyFive from "../../../../public/people-images/brooke-cagle-emlKHDEydhg-unsplash (1).jpg"
import storySix from "../../../../public/people-images/brooke-cagle-TK35M7fUWqM-unsplash (1).jpg"
import storySeven from "../../../../public/people-images/brooke-cagle-R0Ea06wC2IM-unsplash (1).jpg"
import "./persona.css"
import { Noto_Sans } from 'next/font/google'


const notoSans = Noto_Sans({
  subsets:['latin'],
});
export default function HomeBar() {
  
  return (
    <>
    {/* <div>gti</div> */}
      <div className='bg-[#E8E8E8] w-[55%] h-full mt-4'>
        <p className={`${notoSans.className} ml-10 mt-[20px] text-[25px] font-[500]`}>
          Stories
        </p>
        {/* storeis */}
      <div className='pl-10 pt-[35px] pr-8 flex pb-[35px]'>
       <div className='w-[14%] h-[150px] rounded-[7px] p-[2px] backgrounding'>
         <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Laura Adam</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px]` rounded-[7px] p-[2px] backgroundingOne'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>James Bond</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px] rounded-[7px] p-[2px] backgroundingTwo'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Nami Steve</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px] rounded-[7px] p-[2px] backgroundingThree'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Aishat Malic</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px] rounded-[7px] p-[2px] backgroundingFour'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Adam Biro</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px] rounded-[7px] p-[2px] backgroundingFive'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Joy Cock</span>
         </p>
       </div>
       <div className='ml-4 w-[14%] h-[150px] rounded-[7px] p-[2px] backgroundingSix'>
       <p className='flex justify-center mt-[108px]'>
          <span className='w-[30px] border-[#621E72] border-[1px] spanOne mr-1'>
          </span>
          <span className='text-white text-[10px] mt-[8px]'>Gin George</span>
         </p> 
       </div>
      </div>
      <div className={`${notoSans.className} ml-10 mt-2 text-[22px] font-[500]`}>Recent Post</div>
      </div>
    </>
  )
} 
