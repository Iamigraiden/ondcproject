import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

function Header() {
  const[navbar ,setnavbar]=useState(false)
const changeBackground =()=>{
  if(window.scrollY >= 50){
    setnavbar(true)
  }else(setnavbar(false))
}
window.addEventListener('scroll',changeBackground)
  return (
    <div>
<nav className={navbar ? 'navbar fixed-top nav-back':'navbar fixed-top'}>
  <div className="container-lg">
    <div className=''>
  <NavLink to="/" className="navbar-brand">
      <img src="/assets/images/ed-logo.webp" alt="Logo" width="160" className="img-fluid"/>
    </NavLink>
    </div>
    <div className="nav-btn d-none d-md-block text-end">
        <a href='#forma' className='btn border-0 rounded-pill px-4 py-2 text-uppercase text-white'>free 30-min strategy session &rarr;</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
