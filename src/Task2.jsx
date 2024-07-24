import React, { useState } from 'react'
import './Task2CSS.css'

const Task2 = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState('');
  
    const handleNumber1Change = (event) => {
      setNumber1(event.target.value);
    };
  
    const handleNumber2Change = (event) => {
      setNumber2(event.target.value);
    };
  
    const addNumbers = () => {
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
  
      if (!isNaN(num1) && !isNaN(num2)) {
        setResult(`Result: ${num1 + num2}`);
      } else {
        setResult('Please enter valid numbers');
      }
    };
  
    return (
      <div className="add-numbers-container">
        <h2>Add Numbers</h2>
        <div className="input-container">
          <input
            type="text"
            placeholder="Enter number 1"
            value={number1}
            onChange={handleNumber1Change}
          />
          <input
            type="text"
            placeholder="Enter number 2"
            value={number2}
            onChange={handleNumber2Change}
          />
          <button className="add-button" onClick={addNumbers}>Add</button>
        </div>
        <div className="result">
          <p>{result}</p>
        </div>
      </div>
    );
  
}

export default Task2
