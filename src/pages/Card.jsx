import React from "react";
import items from "../utils";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
import { addItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const Card = ({ item }) => {
  // const { itemId } = item.id;
  const cartItems = useSelector((store) => store?.cart?.items);
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const handleAdditem = (item, itemName) => {
    dispatch(addItem(item));
    console.log(` ${itemName} added to cart`);
    toast.success(" Added to Cart!!");
  };
  const onClickHandler = (items, itemName) => {
    const filter = cartItems?.filter((item) => item.id != item);
    dispatch(removeItem(filter && filter));
    console.log(` ${itemName} removed to cart`);
    toast.error(`${itemName} removed to Cart!!`);
  };

  return (
    <>
      <div className="item-container">
        <div className="item-card">
          <img src={`${item.image}`} alt="" className="item-img" />
          <h3 className="item-name">{item.name}</h3>
          <p className="item-cat">Category: {item.category}</p>
          <p className="item-price">Price: Rs {item.price} / day </p>
          <div className="item-btns">
            <Link to={`details/${item.id}`} key={item.id}>
              <button className="view-btn">View Details</button>{" "}
            </Link>

            {/* <button  className="view-btn"
            onClick={() => handleAdditem(item , item.name)}
            >Add to cart</button> */}
            {!itemId ? (
              <button
                className="view-btn hover:bg-green-600"
                onClick={() => handleAdditem(item, item.name)}
              >
                {!itemId ? "Add to Cart" : "Remove"}
              </button>
            ) : (
              <button
                onClick={() => onClickHandler(item.id, item.name)}
                className="p-1 bg-gray-400 shadow-lg mx-[38px]  rounded-lg w-[100px] font-bold hover:text-red-900"
              >
                {!itemId ? "ADD +" : "Remove"}
              </button>
            )}
          </div>
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
  );
};

export default Card;
