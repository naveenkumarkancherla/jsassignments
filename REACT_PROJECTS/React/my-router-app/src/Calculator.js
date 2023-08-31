import React,{useState} from 'react'


export const Calculator = () => {
    const [input,setInput] = useState("");
    const [result,setResult] =  useState(0);
    const handler = event => {
        setInput(event.target.value);
    }
  return (
    <div id="calc">
    <center>
    <h1>React calculator</h1>
      <input align="center" type="text" value={input} name="input" placeholder="enter value" onChange={handler} />
      <br/>
      <br/>
      <button className="id" onClick ={()=> setResult(eval(input))}>Result</button>
      <h2>Result is: {result}</h2>

      <button onClick={() => setInput(input+'1')}>1</button>
      <button onClick={() => setInput(input+'2')}>2</button>
      <button onClick={() => setInput(input+'3')}>3</button>
      <button onClick={() => setInput(input+'4')}>4</button>
      <button onClick={() => setInput(input+'5')}>5</button><br/>
      <button onClick={() => setInput(input+'6')}>6</button>
      <button onClick={() => setInput(input+'7')}>7</button>
      <button onClick={() => setInput(input+'8')}>8</button>
      <button onClick={() => setInput(input+'9')}>9</button>
      <button onClick={() => setInput(input+'0')}>0</button><br/>

      <button onClick={() => setInput(input+'+')}>+</button>
      <button onClick={() => setInput(input+'-')}>-</button>
      <button onClick={() => setInput(input+'*')}>x</button>
      <button onClick={() => setInput(input+'/')}>/</button>
      <button onClick={() => setInput('')}>CLR</button><br/>
    </center>
    </div>
  )
}
