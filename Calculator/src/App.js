import './App.css';
import React, { useState } from 'react'

function App() {
  const [input,setInput]=useState("");
  const[ans,setAns]=useState(0);
  const changeHandler = (e) =>{
    setInput(e.target.value);
    
  }
  const result = () => {
    setAns(eval(input))
  }
  return (
    <div className="main">
      <div className='sub'>
      <center>
        <h1>CALCULATOR</h1>
        <input type="text" value={input} name="input" onChange={changeHandler} /><br></br>
        <button id="btn" onClick={result}>ANS</button>
        <h2>Result is {ans}</h2>
        <table>
          <tr>
            <td>
              <button onClick={() => setInput(input+'1') }>1</button>
              <button onClick={() => setInput(input+'2') }>2</button>
              <button onClick={() => setInput(input+'3') }>3</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => setInput(input+'4') }>4</button>
              <button onClick={() => setInput(input+'5') }>5</button>
              <button onClick={() => setInput(input+'6') }>6</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => setInput(input+'7') }>7</button>
              <button onClick={() => setInput(input+'8') }>8</button>
              <button onClick={() => setInput(input+'9') }>9</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => setInput(input+'+') }>+</button>
              <button onClick={() => setInput(input+'0') }>0</button>
              <button onClick={() => setInput(input+'-') }>-</button>
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => setInput(input+'/') }>/</button>
              <button onClick={() => setInput(input+'*') }>*</button>
              <button onClick={() => setInput('') }>Clear</button>
            </td>
          </tr>
        </table>
      </center>
      </div>
    </div>
  );
}

export default App;
