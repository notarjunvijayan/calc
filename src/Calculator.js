import { useState } from "react"

function Calculator(){
    const [input, setInput] = useState('')
    
    function update(val){
     setInput(input + val)
    }
    function remove(){
        setInput(input.substring(0,input.length-1) )
    }
    function reset(){
        setInput('')
    }
    return(
        <>
        <div className="textfield">
           <span>{input}</span>
        </div>
        <div className="buttons">
        <button onClick = {() => (update(1))}>1</button>
        <button onClick = {() => (update(2))}>2</button>
        <button onClick = {() => (update(3))}>3</button><br></br>
        <button onClick = {() => (update(4))}>4</button>
        <button onClick = {() => (update(5))}>5</button>
        <button onClick = {() => (update(6))}>6</button><br></br>
        <button onClick = {() => (update(7))}>7</button>
        <button onClick = {() => (update(8))}>8</button>
        <button onClick = {() => (update(9))}>9</button><br></br>
        <button onClick = {remove}>C</button>
        <button onClick = {() => (update(0))}>0</button>
        <button onClick = {reset}>CE</button>
        </div>
        </>
        
        
    )
}

export default Calculator