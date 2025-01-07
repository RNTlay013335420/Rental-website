import React from "react";
import logo from "../assets/images/RNT-laybluegrad.svg";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { IoInformationCircle } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import image from "../assets/images/logo-no-background.png";
import { IoSearch } from "react-icons/io5";
import { useState } from "react";
import items from "../utils";
import Card from "./Card";
import Body from "./Body";

const Header = ({ data, setData }) => {
  const cartItems = useSelector((store) => store?.cart?.items);
  const [searchText, setSearchText] = useState("");

  const [filteredItem, setFilteredItem] = useState(data);
  const user = useSelector((store) => store?.user);
  const navigate = useNavigate();

  const loginHandler = () => {
    if (user.length) {
      signOut(auth)
        .then(() => {
          navigate("/");
          // setLogin("login")
          // console.log(login);
          // alert("user logged out")
        })
        .catch((error) => {
          navigate("/error");
        });
    }
  };

  return (
    <>
      {/* <header>
        <nav className="navbar">
            <div className="logo">
               <img src="" alt="logo" />
                
            </div>
            <div className="nav-links">
                <input type="text" placeholder='Search' className="search-bar" />
                <Link to={"/"}> Home </Link>
                <Link to={"/contactUs"} class="Contact-us"> Contact Us</Link>
                <a href="#">Profile</a>
                <Link to={"/cart"}> Cart </Link>
                <a href="#">Favorites</a>
                <Link to={"/login"} className="items-center hover:text-red-900 cursor-pointer">
          <button
            onClick={loginHandler}
            className=" pt-[10px] pb-[10px] pl-[20px] pr-[20px]  hover:text-red-900 font-semibold items-center cursor-pointer"
          >
            {user.length ? <div className="flex cursor-pointer"> Log out  <FaUser className="ml-2 w-[30px] h-[23px] "/>
              </div>: "Login"}
          </button>
        </Link>
            </div>
        </nav>
    </header>
     */}
      <div className="bg-white  w-[100%] flex justify-between m-auto border-1 border-black  border-solid shadow-md h-[80px] items-center fixed z-10 top-0">
        <div className="ml-[1%] flex items-center">
          <img
            src={image}
            alt=""
            className="md:w-[150px] w-[200px] h-[50px] items-center "
          />
          <input
            className="lg:w-[400px] bg-zinc-300 rounded-lg h-[40px] pl-[2%] ml-[110px] focus:outline-none md:w-[250px] sm:w-[200px]"
            type="text"
            placeholder="Search...."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(searchText)
              if(searchText == "") setData(items);
              else{
                const filterItem = items.filter((item) =>
                  item.name.toLowerCase() == (searchText.toLowerCase())
                );
                console.log(filterItem)
                setData(filterItem);
              }
              

              // {
              //   data.map((item, index) => {
              //     return <Card key={index} item={item} />;
              //   });
              // }
            }}
            className="w-[50px] h-[40px]  rounded-lg ml-[5px] font-bold inline-block  p-1"
          >
            <IoSearch className="lg:h-[30px] inline-block w-[27px] mr-2 " />
          </button>
        </div>
        <ul className="flex md:gap-[50px] items-center text-[18px]  mr-[1%] gap-[20px]">
          <Link to={"/"} className="flex hover:text-red-900">
            <FaHome className="m-1 md:w-[30px] w-[10px] h-[20px] items-center" />
            <li className="hover:text-red-900 font-semibold items-center">
              Home
            </li>{" "}
          </Link>
          <Link to={"/about"} className="flex items-center hover:text-red-900">
            <IoInformationCircle className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-red-900 font-semibold  items-center">
              About Us
            </li>{" "}
          </Link>
          <Link
            to={"/contactUs"}
            className="flex items-center hover:text-red-900"
          >
            <MdContactPage className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-red-900 font-semibold  items-center">
              Contact Us
            </li>{" "}
          </Link>
          <Link to={"/cart"} className="flex items-center hover:text-red-900">
            <FaShoppingCart className="m-1 w-[30px] h-[25px]" />
            <li className="hover:text-red-900 font-semibold  items-center">
              Cart({cartItems.length})
            </li>{" "}
          </Link>
          <Link
            to={"/login"}
            className="items-center hover:text-red-900 cursor-pointer"
          >
            <button
              onClick={loginHandler}
              className=" pt-[10px] pb-[10px] pl-[20px] pr-[20px]  hover:text-red-900 font-semibold items-center cursor-pointer"
            >
              {user.length ? (
                <div className="flex cursor-pointer">
                  {" "}
                  Log out <FaUser className="ml-2 w-[30px] h-[23px] " />
                </div>
              ) : (
                "Login"
              )}
            </button>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
