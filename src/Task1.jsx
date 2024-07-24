import React, { useState } from 'react'
import './Task1CSS.css'


const Task1 = () => {
    const [inputValue, setInputValue] = useState('');
  const [hobbies, setHobbies] = useState([]);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addHobby = () => {
    if (inputValue.trim() !== '') {
      setHobbies([...hobbies, inputValue.trim()]);
      setInputValue('');
    }
  };

  const deleteHobby = (index) => {
    const updatedHobbies = [...hobbies];
    updatedHobbies.splice(index, 1);
    setHobbies(updatedHobbies);
  };

  return (
    <div className="hobbies-container">
      <h2>My Hobbies</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your hobby"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addHobby}>Add Hobby</button>
      </div>
      <ul className="hobbies-list">
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
            <button className="delete-button" onClick={() => deleteHobby(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );


}

export default Task1
