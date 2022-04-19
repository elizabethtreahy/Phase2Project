import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <button className={"btn rt live"}>
        <Link style={{ textDecoration: 'none' }} to="/live">Live</Link>
      </button>
      <button className={"btn rt letfly"}>
        <Link style={{ textDecoration: 'none' }} to="/letfly">Let Fly</Link>
      </button>
    </div>
  )
}

export default Home