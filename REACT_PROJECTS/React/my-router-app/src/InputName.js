import React, { useState } from 'react';

function InputName({ onAddName }) {
  const [inputName, setInputName] = useState('');

  const handleBlur = () => {
    if (inputName.trim() !== '') {
      onAddName(inputName);
      setInputName('');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a name"
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
        onBlur={handleBlur} // Call handleBlur when the input field loses focus
      />
    </div>
  );
}

export default InputName;
