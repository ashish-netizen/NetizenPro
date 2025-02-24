import React from 'react';
// import grass from '../images/grass.jpeg';
import Card from "./Card";
import Sdata from './Sdata';
// import Sdat from './Sdata';


const Service = () => {
  return (


    <>
      <div className="my-5">
        <h1 className='text-center'>Our Sevices</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">

          <div className="col-10 mx-auto">
            <div className="row g-4">
              {
                Sdata.map((val, ind)=>{
                  return <Card 
                  key={ind}
                  imgsrc={val.imgsrc}
                  title= {val.title}

                  />
                })
              }


            </div>
          </div>
        </div>
      </div>

    </>

  );
}

export default Service;
