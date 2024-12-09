import React from 'react'
import { BiTimeFive } from "react-icons/bi";
import NNE from '/src/Assets/NNE.png';
import Afro from '/src/Assets/Afro.webp';
import AWOSIKA from '/src/Assets/AWOSIKA.webp';
import Emmanuel from '/src/Assets/Emmanuel.webp';
import Essence from '/src/Assets/Essence.webp';
import Ezz from '/src/Assets/Ezz.webp';
import FBT from '/src/Assets/FBT.webp';
import MYNNE from '/src/Assets/MYNNE.webp';
import Name from '/src/Assets/Name.webp';
import Real from '/src/Assets/Real.webp';
import Reallly from '/src/Assets/Reallly.webp';
import RL from '/src/Assets/RL.webp';




const Data = [
  {
    id:1,
    Image: NNE,
    title: 'Web Developer',
    time: 'Now',
    location: "Canada",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Nne Co.'

  },
  {
    id:2,
    Image: Afro,
    title: 'Software Engineer',
    time: 'Now',
    location: "United Kingdom",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Afro Resturant.'

  },
  {
    id:4,
    Image: Emmanuel,
    title: 'New Taker',
    time: 'Now',
    location: "Pluto",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'HIM!.'

  },
  {
    id:3,
    Image: AWOSIKA,
    title: 'Software Engineer',
    time: 'Now',
    location: "Russia",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Awosika Empire.'

  },
  {
    id:5,
    Image: Essence,
    title: 'Product Designer',
    time: 'Now',
    location: "Australia",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Essence.'

  },
  {
    id:6,
    Image: Ezz,
    title: 'UI/UX Designer',
    time: 'Now',
    location: "France",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Ezzie co.'

  },
  {
    id:7,
    Image: FBT,
    title: 'Web Testing',
    time: 'Now',
    location: "Nigeria",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'F.B.T'

  },
  {
    id:8,
    Image: MYNNE,
    title: 'Python Developer',
    time: 'Now',
    location: "Nigeria",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'MYNNNE.CO'

  },
  {
    id:9,
    Image: Name,
    title: 'DevOps Engineer',
    time: 'Now',
    location: "Ghana",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'NameNow.'

  },
  {
    id:10,
    Image: Real,
    title: 'Cloud Engineer',
    time: 'Now',
    location: "Togo",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Real Life.'

  },
  {
    id:11,
    Image: Reallly,
    title: 'Data Scientist',
    time: 'Now',
    location: "Switzerland",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Reallly.'

  },
  {
    id:12,
    Image: RL,
    title: 'ML Engineer',
    time: 'Now',
    location: "Russia",
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit, Culpa, quam!',
    company: 'Relax.'

  },
  
  
  
  
  
  
  
  
  
  
]


const Jobs = () => {
  return (

         <div>
           <div className="jobContainer flex gap-10 justify-center flex-wrap items-center
           py-100">
             
            {
             Data.map(({id,Image,title,time,location,desc,company}) =>{
               return (
                <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
                [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
   
                  <span className='flex justify-between items-center gap-4'>
                      <h1 className='text-[16px] font-semibold text-textColor
                         group-hover:text-white'>{title} 
                      </h1>
   
                      <span className='flex items-center text-[#ccc] gap-1'>
                         <BiTimeFive />{time}
                      </span>     
                  </span>
                  <h6 className='text-[#ccc]'>{location}
                 
                  </h6>
   
                  <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px]
                   group-hover:text-white'>
                         {desc}
                  </p>
   
                  <div className="company flex items-center gap-2">
                       <img src= {Image} alt="Company Logo" className='w-[10%]' />
                       <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
                  </div>
   
                  <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-
                     [14px] font-semibold text-textColor hover:bg-white group-hover/
                     items:text-textColor group-hover:text-white'>
                     Apply Now 
                  </button>
   
   
   
   
                </div>
               )
                 
               
             })
            }
             
           </div>
         </div>
  )
}

export default Jobs