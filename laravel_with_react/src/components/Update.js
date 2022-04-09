//import React from 'react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom';

 function Update() {
    const params=useParams();
    const userid=params.id;
    const[userget,Setuser]=useState('[]');    
    const[fname,setname]=useState(''); 
    const[uEmail,setemail]=useState('');   
    const[uPassword,setPassword]=useState(''); 
    
    useEffect(()=>{
        fetchUser();
       },[])


       function fetchUser(){
        //console.log("Id Is "+)
       axios.get(`http://127.0.0.1:8000/api/edit/${userid}`)
         .then(response=>{
          Setuser(response.data);
        //console.log( Setuser(response.data));
          setname(response.data.uname)
          
          setemail(response.data.uemail)
         
          setPassword(response.data.upassword)
      })
      .catch(error=>{
          console.log(error);
      })

 
   }

   const onName=(e)=>{
    setname(e.target.value)
   }
   const onEmail=(e)=>{
    setemail(e.target.value)

}
   const onPassword=(e)=>{
    setPassword(e.target.value)
    }
    const submit=(e)=>{
        const object={
            name:fname,
            email:uEmail,
            password:uPassword
        }
        //console.log("Form is Submitted");
        console.log(object);
        e.preventDefault();
        axios.put(`http://127.0.0.1:8000/api/update/${userid}`,object)
        .then(response=>{
            console.log(response.data)
        })
       
    }
  return (
    <div>
        <h1>This is Update Page</h1>
        <form action='' onSubmit={submit} >
        <div>
            <label>Enter Your Name</label>
            <input type="text" name='name' onChange={onName} value={fname}></input>
        </div>
        <div>
            <label>Enter Your Email</label>
            <input type="text" name='email' onChange={onEmail} value={uEmail}></input>
        </div>
        <div>
            <label>Enter Your Password</label>
            <input type="text" name='password' onChange={onPassword} value={uPassword}></input>
        </div>
        <div>
            
            <input type="submit" value={"Update"} ></input>
        </div>
        </form>
    </div>
  )
}
export default Update;