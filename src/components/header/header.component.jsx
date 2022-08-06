import React from 'react'
import './header.styles.css'
const Header = () => {
  return (
    <>
    <span className='header' onClick={()=>window.scroll(0,0)}>🎬 Fun Time 🎥</span>
    </>
  )
}

export default Header