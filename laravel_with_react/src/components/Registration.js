import React,{useState} from 'react'
import axios from 'axios';
//import React,{useState} from 'react';
 function Registration() {
  const[iname,setIname]=useState("");
  const[iemail,setIemail]=useState("");
  const[ipassword,setIpassword]=useState("");
   const Oname=(e)=>{
      
      setIname(e.target.value);
      //console.log(setIname);
  }
  const Oemail=(e)=>{
    setIemail(e.target.value);
    //console.log(setIemail);
}
const Opassword=(e)=>{
    setIpassword(e.target.value);
    //console.log(setIpassword);
}
const onsubmit=(e)=>{
    const obj={
        name:iname,
        email:iemail,
        password:ipassword
    }
    console.log("Form is submitted");
    console.log(obj);
    e.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/register`,obj)
    .then(response=>{
        console.log(response.data)
    })
}
  return (
    <div>
        <h1>This is Registration Page</h1>
        <form action='' onSubmit={onsubmit}>
        <div>
            <label>Enter Your Name</label>
            <input type="text" name='name'  onChange={Oname} value={iname} ></input>
        </div>
        <div>
            <label>Enter Your Email</label>
            <input type="text" name='email'  onChange={Oemail} value={iemail}  ></input>
        </div>
        <div>
            <label>Enter Your Password</label>
            <input type="text" name='password'  onChange={Opassword} value={ipassword} ></input>
        </div>
        <div>
            
            <input type="submit" value={"Register"} ></input>
        </div>
        </form>
    </div>
  )
}
export default Registration;