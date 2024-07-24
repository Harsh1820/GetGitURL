import React, { useState } from 'react';
import './Task4CSS.css'

const Task4 = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [students, setStudents] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const addStudent = () => {
    if (name.trim() !== '' && age.trim() !== '') {
      const newStudent = { name: name.trim(), age: parseInt(age.trim()) };
      setStudents([...students, newStudent]);
      setName('');
      setAge('');
    }
  };

  const deleteStudent = (index) => {
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);
  };

  const clearAllStudents = () => {
    setStudents([]);
  };

  return (
    <div className="student-manager">
      <h2>Student Manager</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Enter age"
          value={age}
          onChange={handleAgeChange}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="student-list">
        {students.map((student, index) => (
          <div key={index} className="student-item">
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <button onClick={() => deleteStudent(index)}>Delete</button>
          </div>
        ))}
      </div>
      {students.length > 0 && (
        <button onClick={clearAllStudents} className="clear-button">
          Clear All Students
        </button>
      )}
    </div>
  );
};

export default Task4;
