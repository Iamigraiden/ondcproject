import React from 'react'
import './css/home.css'
import {NavLink } from 'react-router-dom'
import Ourservices from '../components/Ourservices'
import Herosection from '../components/Herosection'
import Partner from '../components/Partner'
import Whyus from '../components/Whyus'
import Testimonial from '../components/Testimonial'
import Formcomp from '../components/form/Formcomp'

function Home() {
  return (
    <div className='home-page'>
        <div className="homepage-top">
          <div className="home-back-img">
          <img src="/assets/images/EDCom_Banner.webp" alt="image"  className='img-fluid d-none d-md-block back-image'/>
          <img src="/assets/images/ecommobilebanner.webp" alt="image"  className='img-fluid d-block d-md-none back-image'/>
          {/* logos start */}
          <img src="/assets/images/flipkart_logo.webp" alt="image" width="110" className='img-fluid d-none d-md-block fliplogo anime'/>
          <img src="/assets/images/amazon_Logo.webp" alt="image" width="110" className='img-fluid d-none d-md-block amajlogo anime'/>
          <img src="/assets/images/Myntra_Logo.webp" alt="image" width="110" className='img-fluid d-none d-md-block mynlogo anime'/>
          <img src="/assets/images/Nykaa_Logo.webp" alt="image" width="110" className='img-fluid d-none d-md-block nyklogo anime'/>
          {/* logos end  */}
          {/* background img */}
          {/* brand images  */}
            <div className="container-lg top-content">
              <div className='col-lg-9 col-xl-8 col-xxl-7 col-md-9 mx-auto'>
                <h1 className='text-center main-head text-white display-2 fw-bold'>Power Your eCommerce Growth on <span>ONDC's Network and Beyond</span></h1>
                </div>
                <div className='col-xl-5 col-md-7 col-sm-9 col-11 mx-auto'>
                <p className='lead  fw-li main-para text-center text-black mt-3 mb-2 mb-md-3'>Join 500+ Sellers Leveraging India's Open Digital Commerce Revolution. Dominate Amazon, Flipkart, Shopify & Every Marketplace That Matters.</p>
                </div>
               <div className='text-center pt-2 demo-btn'>
                <a href='#forma' className='text-uppercase btn rounded-pill text-white border-0 btn-black px-4 py-2'>request for demo</a>
                </div>
            </div>
            </div>
        </div>
        <Partner/>
        <Herosection/>
        <Ourservices/>
        <Whyus/>
        <Testimonial/>
        <Formcomp/>
    </div>
  )
}

export default Home
