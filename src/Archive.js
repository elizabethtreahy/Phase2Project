import React from "react"
import NavBar from "./NavBar"

function Archive({ data, setData }) {
  const dataList = data.map((x) => <p>{x.comment}</p>)

  return (
    <div>
      <NavBar />
      <p>
        {dataList}
      </p>
    </div>
  )
}

export default Archive