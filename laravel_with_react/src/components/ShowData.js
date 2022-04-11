//import React from 'react'
import{ Link} from 'react-router-dom';


import axios from 'axios';
import React, { useEffect, useState } from 'react'
//import Navbar from './Navbar';



 function ShowData() {
  const [userget,Setuser]=useState([]);
  useEffect(()=>{
    fetchUser();
   },[])

   function fetchUser(){
    axios.get(`http://127.0.0.1:8000/api/datashow`)
    .then(respone=>{
         Setuser(respone.data);
         //console.log(userget)
     })
     .catch(error=>{
         console.log("Something is wrong");
     })

  }

  function deleteUser(userid){
    //alert(userid);

    axios.delete(`http://127.0.0.1:8000/api/delete/${userid}`)
    .then(respone=>{
      console.log(respone.data);
      console.log(userid);
      fetchUser();
    })
    
}
  return (
    <div>
 
        <h1>This is Show Data Page</h1>
        <div>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {
              userget.map((mydata)=>{
               return <tr key={mydata.id}>
                  <td>{mydata.id}</td>
                    <td>{mydata.uname}</td>
                    <td>{mydata.uemail}</td>
                    <td>{mydata.upassword}</td>
                    <td><Link to={"/update/"+mydata.id}>Edit</Link></td>
                    <td><button onClick={()=>deleteUser(mydata.id)}>Delete</button></td>
                </tr>
              })
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}
export default ShowData;