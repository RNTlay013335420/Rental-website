import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Cart from "./pages/Cart"
import Login from './pages/Login'
import Card from './pages/Card'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { auth } from "./utils/firebase";
import { useEffect } from 'react'
import { addUser, removeUser } from './utils/userSlice'
import { onAuthStateChanged } from 'firebase/auth'
import appStore from "./utils/appStore"
import Signup from './pages/Signup'
import ItemDetails from './pages/ItemDetails'
import RentForm from './pages/RentForm'
import About from './pages/About'
import ContactUs from './pages/ContactUs'




function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        console.log(uid, email, displayName)
        navigate("/")
        dispatch(addUser(uid));
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });

    return () => unscubscribe(); // Clean up function when component unmounts
  }, [])

  

  return (
    <>
    <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/cart" element={<Cart/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/signUp" element={<Signup/>} ></Route>
          <Route path="/details/:itemId" element={<ItemDetails/>} ></Route>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/card" element={<Card/>} ></Route>
          <Route path="/rent/:itemId" element={<RentForm></RentForm>} ></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/contactUs" element={<ContactUs/>} ></Route>
    
    </Routes>
    </>
  )
}

export default App
