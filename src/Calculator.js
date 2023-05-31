import { useState } from "react"
import './calculator.css'

function Calculator(){
    const [input, setInput] = useState("")
    
    // Update Input Field
    function update(val){
     setInput(input + String(val))
    }
    // Remove last Item from input Field
    function remove(){
        setInput(input.substring(0,input.length-1) )
    }
    // Reset Input Field
    function reset(){
        setInput('')
    }

    //Final Caluculation
    function calculate(){
        var data = input.replace(/[^-()\d/*+.]/g, '');
        let result = 0
        result = eval(data)
        setInput(result)
    }
    return(
        <div className = "chumma">
        <div className="textfield">
           <span>{input}</span>
        </div>
        <div className="calculator" onKeyUp={(e)=>{
            if(e.key < 9 && e.key > 0){
                update(e.key)
            }
            else if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '(' || e.key === ')' ){
                update(e.key)
            }
            else if(e.key === 'Backspace'){
                remove();
            }
            }}>
        <div className="buttons">
        <button onClick = {() => (update(1))}>1</button>
        <button onClick = {() => (update(2))}>2</button>
        <button onClick = {() => (update(3))}>3</button>
        <button onClick = {() => (update(4))}>4</button>
        <button onClick = {() => (update(5))}>5</button>
        <button onClick = {() => (update(6))}>6</button>
        <button onClick = {() => (update(7))}>7</button>
        <button onClick = {() => (update(8))}>8</button>
        <button onClick = {() => (update(9))}>9</button>
        <button className = "special" onClick = {remove}>C</button>
        <button onClick = {() => (update(0))}>0</button>
        <button className = "special" onClick = {reset}>CE</button>
        </div>
        <div className="spec-but">
            <button onClick = {() =>(update('+'))}>+</button>
            <button onClick = {() =>(update('-'))}>-</button>
            <button onClick = {() =>(update('*'))}>*</button>
            <button onClick = {() =>(update('/'))}>/</button>
            <button onClick = {() => (update('('))}>(</button>
            <button onClick = {() => (update(')'))}>)</button>
            <button onClick = {() => (update('.'))}>.</button>
            <button className = "special" onClick = {calculate}>=</button>
        </div>
        </div>
        </div>
    )
}

export default Calculator