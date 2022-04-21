import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <h1>HELLO WORLD</h1> */}
      
      
      {/* <button className={"btn rt live"}> */}
        <h1><Link style={{ textDecoration: 'none' }} to="/post">HELLO WORLD</Link></h1>
        <h5>the journal for software engineers</h5>
      {/* </button> */}
      {/* <button className={"btn rt letfly"}>
        <Link style={{ textDecoration: 'none' }} to="/letfly">Let Fly</Link>
      </button> */}
    </div>
  )
}

export default Home