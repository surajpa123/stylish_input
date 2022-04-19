import { useState } from 'react'
import logo from './logo.svg'
import React from 'react';
import './App.css'
import { StatefulPinInput } from 'react-input-pin-code';

function App() {
  const [values, setValues] = React.useState(['', '', '']);


  const submit= ()=>{
    
    console.log(values)
    alert("Submitted")
  }

  return (
    <div className="App">
<div className='inputdiv'>
<h1>Enter Your Pin</h1>

<StatefulPinInput
className="inputb"
  initialValue=""
  size="lg"
  length={5}
  type='password'
  onChange={(value, index, values) => setValues(values)}
/>
<br />
<button onClick={submit}>Submit</button>



</div>




     
    </div>
  )
}

export default App
