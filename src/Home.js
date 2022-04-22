import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import SaveAsIcon from '@mui/icons-material/SaveAs';
function Home() {
  const [state, setState] = useState("")
  const [timer, setTimer] = useState(0)

  const helloworld = 'HELLO, feelings.'.split('')


  useEffect(() => {
    setTimeout(() => {

      setState(`${state}${helloworld[timer]}`)
      timer < helloworld.length - 1 ? setTimer(timer + 1) : console.log('done')
    }, 800)
  }, [timer])

  function secondaryBar() {
    if (state.length !== helloworld.length) {
      return null
    } else {
      return (
        <div>
          the journal for software engineers <SaveAsIcon />
        </div>)
    }
  }
  return (

    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)',
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ flexDirection: 'row' }}>
        <h1><Link className={'homefont'} style={{ textDecoration: 'none' }} to="/post">{state.length !== helloworld.length ? `${state}_` : state}</Link></h1>
      </div>

      <span style={{ textAlign: 'center', flexDirection: 'row', width: '400px' }}>{secondaryBar() }</span>

    </div>
  )
}

export default Home