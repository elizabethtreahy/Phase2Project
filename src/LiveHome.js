import React from "react"
import NavBar from "./NavBar"

function LiveHome() {
  return (
    <div>
      <NavBar />
      <h1>LIVE</h1>
      <h2>let your joy live here</h2>
      <form>
        <div>URL</div>
        <div>
          <input placeholder={"your link here"} />
        </div>
        <div>THOUGHTS</div>
        <div>
          <textarea style={{ height: "150px" }} placeholder={"your words here"} />
        </div>
        <div>
          <input type={"submit"} />
        </div>
      </form>
    </div>
  )
}

export default LiveHome