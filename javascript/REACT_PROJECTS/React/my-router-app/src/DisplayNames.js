import React, { useState } from 'react';
import InputName from './InputName';

function DisplayNames() {
  const [names, setNames] = useState([]);
  const handleAddName = (name) => {
    setNames([...names, name]);
  };

  return (
    <div>
        <center>
      <h1>Names List</h1>
      <InputName onAddName={handleAddName} />
      <ul>
        {names.map((name, index) => (
          <li  key={index}>{index + 1}. {name}</li>
        ))}
      </ul>
      </center>
    </div>
  );
}

export default DisplayNames;
