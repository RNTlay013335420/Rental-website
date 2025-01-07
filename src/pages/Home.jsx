import React from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import items from '../utils'
import { useState } from 'react'

const Home = () => {
  const [data, setData ]= useState(items);

  return (
    <div>
      <Header data={data} setData={setData}></Header>
      <Body data={data} setData={setData}></Body>
      <Footer></Footer>
    </div>
  )
}

export default Home
