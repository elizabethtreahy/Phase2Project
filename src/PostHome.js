import React, { useState, useEffect } from "react"
import NavBar from "./NavBar"
import ArchiveNavBar from "./ArchiveNavBar"

function PostHome({ data, setData }) {
  const [blockIndex, setBlockIndex] = useState(0)
  const [journalBlock, setJournalBlock] = useState([])
  const [journalState, setJournalState] = useState([])

  useEffect(() => {
    setBlockIndex(journalBlock.length)
  }, [journalState])

  function newLine() {
    setJournalState([...journalState, journalBlock.join('')])
    setJournalBlock([])
    setBlockIndex(0)
  }

  function handleChange(event) {
    if (event.inputType === 'deleteContentBackward') {
      if (blockIndex > 0) {
        journalBlock.splice(blockIndex - 1)
        setJournalBlock([...journalBlock])
        setBlockIndex(blockIndex - 1)
      }
      if (blockIndex === 0) {
        setJournalBlock(journalState[journalState.length - 1].split(''))
        const dummy = journalState;
        dummy.pop()
        setJournalState([...dummy])
      }
    }
    if (event.inputType === 'insertText') {
      if (event.data) {
        setBlockIndex(blockIndex + 1)
        setJournalBlock([...journalBlock, event.data])
      } else {
        newLine()
      }
    }
  }

  function handleSubmit(comment) {
    const newPost = {
      id: data.length ? data.at(0).id + 1 : 1,
      createdAt: new Date().toLocaleDateString(),
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
    setJournalBlock([])
    setJournalState([])
    setBlockIndex(0)

  }

  const journalDisplay = journalState.map((line) =>
    <h3>
      {line}
    </h3>
  )
  return (
    <div>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={{ boxShadow: '-1px 0 0 #000 inset' }}>
          <ArchiveNavBar data={data} />
        </div>
        <div style={{ marginRight: '36%', marginLeft: 'auto' }}>
          <h3>
            {journalDisplay}{journalBlock}
          </h3>
          <form onSubmit={(e) => {
            handleSubmit(e.target[0].value)
          }}>
            <div style={{
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              top: '500px',
              display: 'block',
              width: '30%',
              marginLeft: '20px',
              marginRight: 'auto',
            }}>
              <textarea  onInput={(e) => handleChange(e.nativeEvent)} style={{ height: "150px", width: "600px", }} placeholder={"your words here"} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', top: '550px' }}>
              <input type={"submit"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


export default PostHome