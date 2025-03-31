import React, { useState } from "react";
import "./form.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialValues = {
  name:"",
  email:"",
  mobile:"",
  storename:"",
};
function Formcomp() {

const {values, errors, handleBlur,touched,resetForm, handleChange, handleSubmit}=useFormik({
  initialValues: initialValues,
  validationSchema: Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email('Invalid email address').required('Required'),
      mobile:Yup.string().matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false}).required('Required'),
  }),
  onSubmit:async (values , { setSubmitting }) => {
    console.log(values);
    try {
    const response =await fetch('https://newondc-d0360-default-rtdb.firebaseio.com/UserData.json',
    {
      method:'POST',
      headers:{
         'Content-Type':'aplication/json'
      },
      body: JSON.stringify({
        ...values
      }),
    });
    if (!response.ok) throw new Error("Submission failed");
        alert("Form submitted successfully!");
        resetForm();
      } 
      catch (error) {
        console.error("Submission error:", error);
        alert("Error submitting form. Please try again.");
      } finally {
        setSubmitting(false);
      }
  }
  
})

  return (
    <div className="form-comp" id="forma">
      <div className="container-lg">
        <h4 className="fs-1 fw-bold text-center text-white lh-1 col-md-8 col-lg-6 mx-auto">
          You're One Strategy Away From Outranking Every Competitor
        </h4>
        <p className="text-center col-lg-6 col-lg-7 mx-auto mt-4 fs-4 text-white mb-2 lh-1">
          Why settle for partial growth? Be the brand others envy.
        </p>
        <p className="text-center col-lg-5 col-md-8 mx-auto fs-4 text-white lh-1">
          <strong className="fw-bold"> Book your free 30-minute consultation</strong> with India's 1
          ONDC & Marketplace Growth Team.
        </p>
        <form  className="pt-4" onSubmit={handleSubmit}>
          <div className="d-flex justify-content-center flex-wrap gap-5 row-gap-4 detail-form">
            <div className="col-lg-4 col-md-5 col-11 ">
              <input
                type="text"
                className="form-control py-4 px-4 text-white rounded-0 shadow-none border-0"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
               {errors.name && touched.name ?( <p className="form-errors mb-0 text-white">{errors.name}</p>):null}
            </div>
            <div className="col-lg-4 col-md-5 col-11">
              <input
                type="email"
                className="form-control py-4 px-4 text-white  rounded-0 shadow-none border-0"
                 placeholder="Bussiness Email"
                 name="email"
                 value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.email && touched.email ?( <p className="form-errors text-white mb-0">{errors.email}</p>):null}
            </div>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-5 row-gap-4 detail-form pt-4">
            <div className="col-lg-4 col-md-5 col-11">
              <input
                type="tel"
                pattern="^[0-9\-\+\s\(\)]*$"
                className="form-control py-4 px-4 text-white rounded-0 shadow-none border-0"
                placeholder="Mobile No."
                name="mobile"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
               {errors.mobile && touched.mobile ?( <p className="form-errors text-white mb-0">{errors.mobile}</p>):null}
            </div>
            <div className="col-lg-4 col-md-5 col-11">
              <input
                type="text"
                className="form-control py-4 px-4 text-white  rounded-0 shadow-none border-0"
                name="storename"
                 placeholder="Store name/Website URL(if any)"
                 value={values.storename}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="text-center pt-5">
          <button  type="submit" className="btn btn-primary btn-black  px-lg-5 px-3 py-3 border-0 rounded-pill">
          Get your free strategy call now
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formcomp;
