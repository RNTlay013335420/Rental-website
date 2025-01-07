import React, { useState } from "react";
import Header from "./Header";
import { FaRupeeSign } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart, updateCart } from "../utils/cartSlice";
import Card from "./Card";
import ItemDetails from "./ItemDetails";
import { removeItem } from "../utils/cartSlice";
import { useParams } from "react-router-dom";
import items from "../utils";
import { useRef } from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalItems = cartItems.map((item) => ({ ...item }));
  // console.log(cartItems)
  const { itemId } = useParams();

  const inpValue = useRef(null);
  const [value, setValue] = useState(inpValue);

  const dispatch = useDispatch();

  const handleClearitem = (item) => {
    dispatch(clearCart(item));
    toast.success("Cart is cleared!!");
  };
  const onClickHandler = (items, itemName) => {
    console.log(itemName);
    const filter = cartItems?.filter((item) => item.id != items);
    console.log(filter);
    dispatch(removeItem(filter && filter));
    toast.error(`${itemName} removed to Cart!!`);
  };
  // let total = [];
  // total = cartItems?.map(
  //   (item) =>item.price
  // );
  // let sum = total?.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue ,
  //   0
  // );
  // const[sumval, setSumVal]= useState(0);
  // const onChangeHandler=(itemPrice, value)=>{
  //   console.log(itemPrice)
  //   console.log(value)
  //   let price =  itemPrice * value;
  //   console.log(price)
  //   setSumVal(sumval + price)
  //   console.log("sumval:"+ sumval)
  // }

  //new
  // console.log(totalItems)
  // console.log("totalItems")
  // console.log(totalItems)

  const [total, setTotal] = useState(0);
  const [updatedPrice, setupdatedPrice] = useState(0);

  const onChangeHandler = (itemId, index, item, days) => {
    const filterItem = totalItems.filter((item) => item.id == itemId);
    console.log(filterItem);

    const updated = filterItem[0].price * days;
    setupdatedPrice(updated);
    totalItems[index].totalPrice = updated;
    // console.log(totalItems[index].totalPrice);
    dispatch(updateCart(totalItems && totalItems));
    // console.log(cartItems)
    // setTotal(cartItems[index].totalPrice)
  };
  let sum = 0;
  cartItems && cartItems.map(item => {
    console.log(item.totalPrice&& item.totalPrice)
    if((item.totalPrice && item.totalPrice) == undefined){
      sum += 0;
    }
    else sum += (item.totalPrice && item.totalPrice);
  })
  // setTotal(sum);
  // let newTotal = updatedPrice?.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   0
  // );
  // setTotal(newTotal);

  // console.log(total)

  const payHandler = () => {
    alert("your payment is successfull, items are ordered");
    dispatch(clearCart());
    toast.success("Payment succesfull!!");
  };

  // console.log(cartItems);
  return (
    <>  
      <Header></Header>
      <div className="mt-[100px]">
        {totalItems.map((item, index) => (
          <div className="max-w-[50%]" key={index}>
            <div className="min-w-[200px]  pl-10 flex justify-between p-3 border-r-2 border-r-solid border-r-gray-400">
              <div className="w-[50%] text-lg font-bold">
                <h1 className="text-black mb-1">{item.name}</h1>
                <img src={item.image} className="w-[200px] h-[150px]" alt="" />
              </div>
              <div className="w-[100%]  pt-5">
                <p className="text-black text-[18px]">
                  Location : {item.location}
                </p>
                <p className="text-black text-[18px]">
                  Price : Rs. {item.price} / day
                </p>
                <label className="text-black text-[18px]" htmlFor="number">
                  For how many days?{" "}
                </label>
                <input
                  className="rounded bg-gray-300"
                  type="number"
                  name="number"
                  id="number"
                  min="1"
                  max="30"
                  ref={inpValue}
                  onChange={(e) =>
                    onChangeHandler(
                      item.id,
                      index,
                      item,
                      parseInt(e.target.value)
                    )
                  }
                />
                <br />
                <p>
                  Total for {item.name} : Rs. {item.totalPrice ? item.totalPrice : '0'}
                </p>
                <button
                  onClick={() => onClickHandler(item.id, item.name)}
                  className="bg-gray-400 mt-2 w-[100px] h-[40px] rounded text-black font-bold hover:bg-red-700  "
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
        ;
        {cartItems?.length ? (
          <div className="w-[50%] absolute top-[100px] left-[50%]">
            <button
              className="border-gray-400 border-[1px] w-[120px] h-[50px] rounded-lg ml-[78%] font-bold mt-3 hover:bg-gray-400"
              onClick={handleClearitem}
            >
              Clear Cart
            </button>

            <div className="w-full border-b-4">
              <div className="w-full flex justify-between px-6 py-6  mt-6  shadow-2xl shadow-gray-800 h-[70px]">
                <span className="inline-block text-xl font-bold text-black">
                  TO PAY
                </span>
                <span className="flex text-xl font-bold text-black items-center ">
                  <FaRupeeSign></FaRupeeSign>
                  {sum}
                </span>
              </div>
              <hr></hr>
              <div className="px-6  bg-white w-full py-2 flex flex-row-reverse ">
                <div className="flex  items-center bg-green-600 rounded-md font-semibold gap-1 cursor-pointer text-white w-32 px-3 py-2 hover:opacity-[0.95]"
                onClick={payHandler}>
                  PAY <FaRupeeSign></FaRupeeSign>
                  {sum}
                </div>
                
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <FaCartPlus className="h-[32%] w-[32%] mx-auto text-zinc-300" />
            <h1 className="m-10 font-bold text-2xl text-red-900">
              Your cart is empty! Please Add items to cart...
            </h1>
            <br></br>
          </div>
        )}
      </div>
      <Toaster
                containerStyle={{
                  top: '15%',
                  left: '83%',
                }}
                className=""
              />
    </>
  );
};

export default Cart;
