import React from 'react'
import{Link} from 'react-router-dom'
 function Navbar() {
  return (
    <div>
        <li><Link to="/">Registration</Link></li>
        <li><Link to="/login">log In</Link></li>
        <li><Link to="/adddata">Add Data</Link></li>
        <li><Link to="/showdata">Show Data</Link></li>
        <li><Link to="/update">Update Data</Link></li>
    </div>
  )
}
export default Navbar;