import React from 'react'

function Whyus() {
  return (
    <div className='whyuscomp'>
       <div className="container-lg">
        <h6 className="text-uppercase text-center fs-4 fw-normal ">
          why us?
        </h6>
        <h4 className="fs-1 fw-bold text-center lh-1 col-md-8 col-lg-6 mx-auto mt-3">
        Why Leading Brands  <span className="colora">Choose Experiences Digital</span> as Their only Growth Partner
        </h4>
        <div className="networks pt-5 d-flex flex-wrap justify-content-center row-gap-3">
          {/* col */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
          <div className="net-img text-center">
            <img src="/assets/images/growth1.webp" alt="logo" className='img-fluid' />
          </div>
          <div className="col-9 mx-auto pt-3">
          <h4 className='colorc fw-bold'>ONDC Network Pioneers</h4>
          <p className='colorc fs-5 lh-1'>First-mastery in ONDC integrations for hyper-local & national scalability.</p>
          </div>
        </div>
        {/* col */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
          <div className="net-img text-center">
            <img src="/assets/images/growth2.webp" alt="logo" className='img-fluid' />
          </div>
          <div className="col-9 mx-auto pt-3">
          <h4 className='colorc fw-bold'>360° Marketplace Dominance</h4>
          <p className='colorc fs-5 lh-1'>From Amazon Prime Day to Myntra End of Reason Sale - we own every peak.</p>
          </div>
        </div>
        {/* col */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
          <div className="net-img text-center">
            <img src="/assets/images/growth3.webp" alt="logo" className='img-fluid' />
          </div>
          <div className="col-9 mx-auto pt-3">
          <h4 className='colorc fw-bold'>Guaranteed Seller Success</h4>
          <p className='colorc fs-5 lh-1'>97% client retention 200% avg. revenue growth 48-hour account reinstatement.</p>
          </div>
        </div>
        {/* col */}
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 text-center">
          <div className="net-img text-center">
            <img src="/assets/images/growth4.webp" alt="logo" className='img-fluid'/>
          </div>
          <div className="col-9 mx-auto pt-3">
          <h4 className='colorc fw-bold'>No More Vanity Metrics</h4>
          <p className='colorc fs-5 lh-1'>We track what matters: Buy Box win rate, CAC vs. LTV, and inventory turns.</p>
          </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Whyus
