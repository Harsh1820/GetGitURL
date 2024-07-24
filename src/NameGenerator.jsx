import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './NameGen.css'

function NameGenerator() {
  const [name, setName] = useState('');
  const [genderInfo, setGenderInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const fetchGenderInfo = async () => {  
    setLoading(true);
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGenderInfo(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGenderInfo();
  };

  return (
    <div className="App">
      <h1>Genderize App</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a name:
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Please Enter Your Name..."
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Get Gender Info'}
        </button>
      </form>
      {genderInfo && (
        <div className="gender-info">
          <h2>Results for "{name}":</h2>
          <p>
            Gender: {genderInfo.gender}, Probability: {genderInfo.probability.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}

export default NameGenerator;
