import React from 'react'
import { useParams } from 'react-router-dom'
import items from '../utils';
import { useState } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import toast, { Toaster } from "react-hot-toast";


const ItemDetails = () => {
  const cartItems = useSelector((store) => store?.cart?.items);
 
  const dispatch = useDispatch();

  const handleAdditem = (item,itemName) => {
    dispatch(addItem(item));
    console.log(` ${itemName} added to cart`)
    toast.success(" Added to Cart!!");
  };
  const onClickHandler = (items, itemName) => {
    const filter = cartItems?.filter((item) => item.id != items);
    dispatch(removeItem(filter && filter));
    console.log(` ${itemName} removed to cart`)
    // toast.error(`${itemName} removed to Cart!!`);
  };




  const {itemId}= useParams();
  console.log(itemId)
  const filitem = items.filter((item)=>item.id==itemId);
  const {name, price,location,image,id }=filitem[0];
  console.log(filitem)
  
  // console.log(filitem[0].name)

  return (
    <>
    <Header/>
    <div className=' h-[600px]  w-[40%] m-auto mt-[100px] p-[2%] '>
      <h1 className='text-center text-[30px] font-bold mb-[3%] mr-[3%]'>{name}</h1>
      <img src={image}
      className='w-[400px] h-[300px] text-center ml-14 rounded-lg mb-[3%]'
       alt="" />
      <p className='text-black text-xl ml-14 mb-[3%]'>Location :{location}</p>
      <p className='text-black text-lg ml-14 mb-[3%] italic '></p>
      <p className='text-black text-xl ml-14 mb-[3%]'>Price : Rs. {price} / day</p>
      <div className="flex justify-between  pr-14">
       {/* <button className=' bg-gray-200 w-[130px] h-[40px] rounded-lg font-bold hover:bg-gray-400'>Add to Cart</button> */}
       
                  <button
                    className="p-1 bg-gray-400 shadow-lg mx-[58px]  rounded-lg w-[143px] font-bold hover:bg-green-600"
                    onClick={() => handleAdditem(filitem[0],name)}
                  >
                   Add to Cart
                  </button>
       <Link to={`/rent/${id}`} key={id} >
       <button className=' bg-gray-200 w-[130px] h-[40px] rounded-lg font-bold hover:bg-gray-400'>Rent Now</button>
       </Link>
       </div>
      
     
    </div>
               <Toaster
                    containerStyle={{
                      top: '15%',
                      left: '83%',
                    }}
                    className=""
                  />
    </>
  )
}

export default ItemDetails
