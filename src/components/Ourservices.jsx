import React from "react";
import "./css/comp.css";
import { NavLink } from "react-router-dom";
import servicesdata from '../json/services.json'
function Ourservices() {
  return (
    <div className="servicescomp">
      <div className="container-lg">
        <h6 className="text-uppercase text-center fw-normal fs-4 ">
          our services
        </h6>
        <h4 className="fs-1 fw-bold text-center lh-1 col-md-8 col-lg-6 mx-auto mt-3">
          End-to-End eCommerce Mastery - <span className="colora">From ONDC to Global Marketplaces</span>
        </h4>
        {/* <p className="text-center col-md-6 col-11 mx-auto mt-4 fs-5 colorb sub-title">
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </p> */}

        {/* services card */}
        <div className="pt-5">
            <div className="row row-gap-5 justify-content-center">
            {servicesdata.map((data)=>{
                return(
                  // <div className="col-lg-4 col-md-6 col-sm-8 ">
                  <div className="service-card">
                    <div className="card rounded-4 px-0 border-0 overflow-hidden h-100">
                    <div className="card-header px-4 pt-4 pb-2 h-100">
                        <h6 className="text-white fs-6 fw-normal text-capitalize opacity-75 ">{data.cate}</h6>
                        <h5 className="text-white fs-4 col-10">{data.category}</h5>
                    </div>
                  <div className="card-body px-4 pb-4 h-100 d-flex flex-column justify-content-between">
                    <div className="con">
                  {data.services.map((desc) => (
                <p className="card-text fs-5 colorb fw-normal mb-2">{desc}</p>
              ))}
              </div>
              <div className="card-footer bg-transparent border-0">
                    <NavLink to="/" className="btn btn-primary btn-black border-0 text-uppercase rounded-pill px-3">
                      Upgrade now
                    </NavLink>
                    </div>
                  </div>
                </div>
                 </div>
                )
            })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Ourservices;
