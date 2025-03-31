import React from 'react'
import partnerjson from '../json/partner.json'

function Partner() {
  return (
    <div className='partner-comp'>
        <div className="container-lg">
            <h4 className='colorb fs-1  fw-normal text-center'>Certified Growth Partner</h4>
            <div className="d-flex flex-wrap flex-lg-nowrap mt-5 mx-auto row-gap-md-5 row-gap-3 partner-div justify-content-center justify-content-md-start">
            {partnerjson.map((data,i) => {
              return(
                <>
                <div className="col-lg-2 col-md-3 col-sm-4 col-6 partner ">            
            <div className="text-center partner-img mx-auto">
              <img src={data} alt="logo" className="img-fluid w-100"/>
              </div>
          </div>
                </>
              )
            })}
          </div>
        </div>
        
      
    </div>
  )
}

export default Partner
