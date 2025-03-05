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
export default function HomeBar() {
  
  return (
    <>
    {/* <div>gti</div> */}
      <div className='bg-[#E8E8E8] w-[55%] h-full mt-4'>
        {/* storeis */}
      <div className='pl-10 pt-[35px] pr-8 flex pb-[35px]'>
       <div className='w-[100px] h-[140px] rounded-[7px] p-[2px] backgrounding'>
         <p className='flex'>
          <span className='w-[30px] border-black border-[2px] spanOne'>
         
          </span>
         </p>
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingOne'>
        
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingTwo'>
        
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingThree'>
        
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingFour'>
       
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingFive'>
        
       </div>
       <div className='ml-4 w-[100px] h-[140px] rounded-[7px] p-[2px] backgroundingSix'>
      
       </div>
      </div>
      </div>
    </>
  )
} 
