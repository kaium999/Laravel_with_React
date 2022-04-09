import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Registration from './Registration';
import LogIn from './LogIn';
import Adddata from './Addata';
import ShowData from './ShowData';
import Update from './Update';
 function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Registration />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/adddata' element={<Adddata />}></Route>
            <Route path='/showdata' element={<ShowData />}></Route>
            <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
    </div>
  )
}
export default Routing;