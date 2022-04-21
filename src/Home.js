import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{flexDirection: 'row'}}>
        <h1 ><Link style={{ textDecoration: 'none' }} to="/post">HELLO WORLD</Link></h1>
      </div>
     
        <span style={{textAlign: 'center', flexDirection: 'row', width: '400px'}}>the journal for software engineers</span>
     
    </div>
  )
}

export default Home