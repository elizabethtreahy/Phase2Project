import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"



function Archive({ data, setData }) {

  const [currentJournal, setCurrentJournal] = useState([])
  const [dataLoaded, setDataLoaded] = useState(false)

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

  const journalList = currentJournal.map((entry) =>
    <div>
      <div>
        {entry ? entry.createdAt : null}
      </div>
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
    </div>
  )
}

export default Archive