import React from 'react'
import { HiArrowLongLeft } from "react-icons/hi2";
import './css/home.css'
import { NavLink } from 'react-router';
function Error() {
  return (
    <div>
      <div className='error-main container-fluid text-center'>
     <h1><span className='text-danger'>404</span> - page not found.</h1>
    <NavLink to="/" className="text-white btn btn-lg border-0 error-btn"><HiArrowLongLeft className='e-icon' />back to homepage</NavLink>
    </div>
    </div>
  )
}

export default Error
