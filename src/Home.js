import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1><Link style={{ textDecoration: 'none' }} to="/post">HELLO WORLD</Link></h1>
      <h5>the journal for software engineers</h5>
    </div>
  )
}

export default Home