// import React from 'react';

 
const InputComponent = ({ onTextChange }) => {
  const handleInputChange = (e) => {
    onTextChange(e.target.value); // Send input value to parent
  };
 
  return (
<div>
<input
        type="text"
        placeholder="Type something..."
        onChange={handleInputChange}
      />
</div>
  );
};
 
export default InputComponent;