import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from './Navbar';
import pic from "../images/img1.svg";
const Common = (props) => {

    const {name, imgsrc, go, btname}= props;
  return (
    <>

      <section id="header" className=" d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row ">

            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                  <h1>
                     {name}
                     <br/>
                      <strong className="brand-name">NetizenPro</strong>
                      </h1>
                  <h2 className='my-3'>
                      We are a team of experienced developers crating digital world
                      </h2>
                  <div className="mt-3">
                    <NavLink to={go} className='btn btn-outline-success rounded-pill '> {btname}</NavLink>
                  </div>

                </div>

                <div className="col-lg-6  order-1  order-lg-2 header-img">

                  <img src={imgsrc} className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}

export default Common;
