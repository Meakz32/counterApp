import { Container, Button, Stack } from '@mui/material'
import React, { useState } from 'react'


export default function App() {

  let [value, setValue] = useState('0')
  let [disabledBtn, setDisabledbtn] = useState(true)
  let [errMsg, setErrmsg] = useState(true)

  

  const handlePlus = ()=>{
    setValue(++value)
    if(value <= 0){
      setDisabledbtn(true)
      setErrmsg(true)
    }else{
      setDisabledbtn(false)
      setErrmsg(false)
    }
    
  }

  const handleMinus = ()=>{
    setValue(--value)
    if(value <= 0){
      setDisabledbtn(true)
      setErrmsg(true)
    }else{
      setDisabledbtn(false)
      setErrmsg(false)
    }
    
  }


  return (
    <>
       <Container>
       <Stack direction="row" spacing={2}>
          <h1>{value}</h1>
          { errMsg
            ?<p>(reached minimum value possible)</p>
            :null
          }
        </Stack>
          <Button variant="contained" disabled= {disabledBtn} onClick={handleMinus}>-</Button>
          <Button variant="contained" onClick={handlePlus}>+</Button>
       </Container>
    </>
  )
}
