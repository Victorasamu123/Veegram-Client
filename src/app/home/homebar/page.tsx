"use client"
import Image from 'next/image'
import storyOne from "../../../../public/people-images/aiony-haust-3TLl_97HNJo-unsplash (1).jpg"
import storyTwo from "../../../../public/people-images/aiony-haust-f2ar0ltTvaI-unsplash (1).jpg"
import storyThree from "../../../../public/people-images/albert-dera-ILip77SbmOE-unsplash (1).jpg"
import storyFour from "../../../../public/people-images/alex-perri-At__EKm5PGE-unsplash (1).jpg"
import storyFive from "../../../../public/people-images/arvin-keynes-IPETsB4dcCs-unsplash (1).jpg"
import storySix from "../../../../public/people-images/averie-woodard-WsSdUPXVb4M-unsplash (1).jpg"
import storySeven from "../../../../public/people-images/bardia-hashemirad-3P7jxpEgkC4-unsplash (1).jpg"
import storyEight from "../../../../public/people-images/jessica-felicio-nIKCy5CWIzk-unsplash (1).jpg"
import storyNine from "../../../../public/people-images/aiony-haust-f2ar0ltTvaI-unsplash (1).jpg"
import "./persona.css"
export default function HomeBar() {
  
  return (
    <>
    {/* <div></div> */}
      <div className='bg-[#E8E8E8] w-[55%] h-full mt-4'>
        {/* storeis */}
      <div className='pl-8 pt-[35px] pr-8 flex pb-2'>
       <div className='w-[82px] h-[110px] rounded-xl p-[2px] border-[#621E72] border-[2px]'>
        {/* <Image src={storyOne} alt='' width={70}  className='rounded-xl'/> */}
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyTwo} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyThree} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyFour} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyFive} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storySix} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storySeven} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyEight} alt='' width={70} className='rounded-xl'/>
       </div>
       <div className='ml-4 bw-fit h-fit rounded-xl border-[2px] p-[2px] border-[#621E72]'>
        <Image src={storyNine} alt='' width={70} className='rounded-xl'/>
       </div>
      </div>
      </div>
    </>
  )
} 
