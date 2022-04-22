import React, { useState, useEffect } from "react"
import { Redirect, useHistory } from "react-router-dom"
import NavBar from "./NavBar"



function Archive({ data, setData }) {

  const [currentJournal, setCurrentJournal] = useState('')
  const [dataLoaded, setDataLoaded] = useState(false)
  const history = useHistory()
  useEffect(() => {
    data.length ? setDataLoaded(true) : console.log('do nothing')
  })

  useEffect(() => {
    const urlLocation = window.location.href.replace('http://localhost:3001/archive/', '')
    if (urlLocation !== 'http://localhost:3001/archive') {
      setCurrentJournal(data.find((entry) => entry.id == urlLocation))
    } else {
      setCurrentJournal(data)
    }
  }, [dataLoaded])

  function handleClick() {
    setData(data.filter((x) => x !== currentJournal))
    fetch(`http://localhost:3000/feelings/${currentJournal.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })

    history.push("/post")
  }

  const splitJournal = currentJournal ? currentJournal.comment.split('\n') : null
  const separatedJournal = splitJournal ? splitJournal.map((x, i) =>
    <div key={`splitjournal ${i}`}>
      {x}
    </div>) : null
  return (
    <div>
      <NavBar />
      <div>
        {currentJournal?.createdAt}
      </div>
      <div>
        {separatedJournal ? separatedJournal : null}
      </div>
      <button onClick={() => handleClick()}>Delete</button>
    </div>
  )
}

export default Archive