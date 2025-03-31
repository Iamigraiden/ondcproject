import React from 'react'

function Herosection() {
  return (
    <div className='herosection'>
      <div className="container-lg">
      <h4 className="fs-1 fw-bold text-center lh-1 mx-auto mt-3">
      Strengthening Connections, <br /><span className="colora">Fueling Success</span>
        </h4>
        <p className="text-center col-md-5 col-11 mx-auto mt-4 fs-5 colorb sub-title">
        Unlock a World of Opportunities. We empower participants driving the ONDC Network forward
        </p>
      </div>
      <div className="container-fluid">
        <div className="videodiv pt-3">
          <video playsInline autoPlay muted loop src="/assets/video/Ecom_Desktop.mp4" type="video/mp4" className='d-none d-md-block'></video>
          <video playsInline autoPlay muted loop src="/assets/video/Ecom_Mobile.mp4" type="video/mp4" className='d-md-none d-block'></video>
        </div>
        </div>
    </div> 
  )
}

export default Herosection
