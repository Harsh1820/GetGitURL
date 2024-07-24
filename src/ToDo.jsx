import React, { useState } from 'react'

const ToDo = () => {
    let arr = ["Chess", "Playing", "Coding", "Travelling" ]
    let [toDo, setToDo] = useState(arr);
  return (
    
    <div>
      <input type="text" value={toDoEntered}
      onChange={chnageToDoEntered}
      />
    </div>
  );

}

export default ToDo
