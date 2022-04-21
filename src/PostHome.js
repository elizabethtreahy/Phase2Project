import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import ArchiveNavBar from "./ArchiveNavBar"

function PostHome({ data, setData }) {
  const [journalChunk, setJournalChunk] = useState('')
  const [journalState, setJournalState] = useState([])
  const flexClass = `bold`
  function handleChange(event) {

    if (event.inputType === 'insertText') {
      if (event.data) {
        setJournalChunk(`${journalChunk}${event.data}`)
      } else {
        newLine()
      }
    }
    function newLine() {
      setJournalState([...journalState, journalChunk])
      setJournalChunk('')
    }
  }
  function handleSubmit(comment) {
    const newPost = {
      id: data.length ? data.at(0).id + 1 : 1,
      createdAt: new Date(),
      comment
    }
    data ? setData([...data, newPost]) : setData([newPost])

    fetch(`http://localhost:3000/feelings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })

  }
  const journalDisplay = journalState.map((line) =>
    <div className={`${flexClass}`}>
      {line}
    </div>
  )
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={{ boxShadow: '-1px 0 0 #000 inset' }}>
          <ArchiveNavBar data={data} />
        </div>
        <div>
          <div>
            {journalDisplay}{journalChunk}
          </div>
          <form onSubmit={(e) => {
            e.preventDefault()
            handleSubmit(e.target[0].value)
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '800px' }}>
              <textarea onInput={(e) => handleChange(e.nativeEvent)} style={{ height: "150px", width: "700px", }} placeholder={"your words here"} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '850px' }}>
              <input type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default PostHome