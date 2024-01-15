import React, { useState, useRef, useEffect } from 'react';

// Without useRef
const WithoutUseRefExample = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  useEffect(() => {
    // Log whenever the component renders
    console.log('Component rendered without useRef');
  });

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    // Without useRef: accessing the current value of the state directly
    setSubmittedValue(inputValue);
    // Clear the input field after submission
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
};

// With useRef
const WithUseRefExample = () => {
  const inputRef = useRef(null);
  const [submittedValue, setSubmittedValue] = useState('');

  useEffect(() => {
    // Log whenever the component renders
    console.log('Component rendered with useRef');
  });

  const handleSubmit = () => {
    // With useRef: accessing the current value of the input element directly
    setSubmittedValue(inputRef.current.value);
    // Clear the input field after submission
    inputRef.current.value = '';
  };

  return (
    <div>
      {/* Attach the ref to the input element */}
      <input type="text" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
};

export default WithUseRefExample;