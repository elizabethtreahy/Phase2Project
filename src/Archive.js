import React, { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import NavBar from "./NavBar"



function Archive({ data, setData }) {

  const [currentJournal, setCurrentJournal] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)
  const history = useHistory()
  useEffect(() => {
    data.length ? setDataLoaded(true) : console.log('do nothing')
  })

  useEffect(() => {
    const urlLocation = window.location.href.replace('http://localhost:3001/archive/', '')
    console.log('url', urlLocation)
    console.log('data', data.find((entry) => entry.id == urlLocation))
    if (urlLocation !== 'http://localhost:3001/archive') {
      setCurrentJournal([data.find((entry) => entry.id == urlLocation)])
    } else {
      setCurrentJournal(data)
    }
  }, [dataLoaded])

  function handleClick() {
    setData(data.filter((x) => x !== currentJournal[0]))
    fetch(`http://localhost:3000/feelings/${currentJournal[0].id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    
    history.push("/post")
  }

  const journalList = currentJournal.map((entry) =>
    <div>
      <h4>
        {entry ? entry.createdAt : null}
      </h4>
      <div>
        {entry ? entry.comment : null}
      </div>
    </div>
  )
  return (
    <div>
      <NavBar />
      <p>
        {journalList ? journalList : null}
      </p>
      <button onClick={() => handleClick()}>Delete</button>
    </div>
  )
}

export default Archive