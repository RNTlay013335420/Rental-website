import React from 'react'
import items from '../utils';
import Card from './Card';
import "../App.css"
import { useState } from 'react';

const Body = ({ data , setData}) => {
  // const [info, setInfo ]= useState(items);

  // console.log(data)
  return (
    <>
    <div class="body-container"  className=' flex flex-wrap  w-[90%]  justify-center m-auto mt-[5%]'>
       {data.map((item, index)=>{
         return <Card key={index} item={item}/>
       })} 
       
        
    </div>
    </>
  )
}

export default Body;
