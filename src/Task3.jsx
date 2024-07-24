import React, { useState } from 'react';
import './Task3CSS.css'

const Task3 = () => {
  const [degrees, setDegrees] = useState('');
  const [sinResult, setSinResult] = useState('');
  const [cosResult, setCosResult] = useState('');
  const [tanResult, setTanResult] = useState('');

  const handleDegreesChange = (event) => {
    setDegrees(event.target.value);
  };

  const calculateSin = () => {
    const radians = (parseFloat(degrees) * Math.PI) / 180;
    const sinValue = Math.sin(radians);
    setSinResult(`Sin(${degrees}°) = ${sinValue.toFixed(4)}`);
  };

  const calculateCos = () => {
    const radians = (parseFloat(degrees) * Math.PI) / 180;
    const cosValue = Math.cos(radians);
    setCosResult(`Cos(${degrees}°) = ${cosValue.toFixed(4)}`);
  };

  const calculateTan = () => {
    const radians = (parseFloat(degrees) * Math.PI) / 180;
    const tanValue = Math.tan(radians);
    setTanResult(`Tan(${degrees}°) = ${tanValue.toFixed(4)}`);
  };

  return (
    <div className="trigonometry-calculator">
      <h2>Trigonometry Calculator</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter degrees"
          value={degrees}
          onChange={handleDegreesChange}
        />
      </div>
      <div className="button-container">
        <button onClick={calculateSin}>Sin</button>
        <button onClick={calculateCos}>Cos</button>
        <button onClick={calculateTan}>Tan</button>
      </div>
      <div className="results">
        {sinResult && <p>{sinResult}</p>}
        {cosResult && <p>{cosResult}</p>}
        {tanResult && <p>{tanResult}</p>}
      </div>
    </div>
  );
};

export default Task3;
