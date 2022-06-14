import React from 'react'
import "./SubHeader.css";
import { Link } from "react-router-dom";
export default function SubHeader() {
  return (
    <div className="subheaderContainer">
      <ul className="list_group">
        <Link className='link' to="/shirt"><li>Shirt</li> </Link>
        <Link className='link' to="/pants"><li>Pants</li> </Link>
      </ul>
    </div>
  )
}
