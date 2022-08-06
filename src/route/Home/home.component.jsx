import React from 'react'
import {Outlet} from 'react-router-dom'
import Trending from "../../components/Trending/trending.component";
const Home = () => {
  return (
    <>
        <Outlet/>
        <Trending/>
    </>
  )
}

export default Home