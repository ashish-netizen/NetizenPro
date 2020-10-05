import React, {useState} from 'react';


const Contact=()=> {

  const [data, setData]= useState({
Name:"",
Email:"",
Password:"",
Message:""

  })

  const inputEvent=(e)=>{
    console.log(e.target.value)
  
    setData(e.target.value)

  }






  return (
    <>
  
<div className="my-5">
     <h1 className="text-center">Connect To Us</h1>
</div>
  
  <div className="container contact_div">

    <div className="row">
<div className="col-md-6 col-10 mx-auto">



<form>



<div className="form-group">
    <label for="exampleInputEmail1">Name</label>

    <input type="text" className="form-control" 
    id="exampleInput" aria-describedby="emailHelp" 
    
    name= "Name"
    onChange={inputEvent}
    value={data.Name}
    placeholder="Enter Your Name"/>
    </div>
    <br/>
  

  <div className="form-group">
    <label for="exampleInputEmail1">Email address</label>

    <input type="email" className="form-control" 
    id="exampleInputEmail1" aria-describedby="emailHelp" 
    
    name= "Email"
    onChange={inputEvent}
    value={data.Email}
    placeholder="Enter email"/>
  
 
  </div>
  <br/>



  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>

    <input type="password" 
    className="form-control" 
    id="exampleInputPassword1" 
    
    
    name= "Password"
    onChange={inputEvent}
    value={data.Password}
    placeholder="Password"/>
  </div>
  <br/>
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Give Words</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" 
    name= "Message"
    onChange={inputEvent}
    value={data.Message}
    rows="3"></textarea>
  </div>
<br/>
  <button type="submit" className="btn btn-outline-success">Submit</button>


  
</form>



</div>
    </div>
  </div>
  </>
  );

}

export default Contact;
