import React, { useState, useCallback } from 'react';

const ChildComponent = React.memo(({ onClick, label }) => {
  console.log(`Rendering ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  // Without useCallback
  const handleClickWithoutCallback = () => {
    setCount(count + 1);
  };

  // With useCallback
  const handleClickWithCallback = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array ensures the function doesn't change

  return (
    <div>
      <p>Count: {count}</p>
      
      {/* Without useCallback */}
      {/* <ChildComponent onClick={handleClickWithoutCallback} label="Without Callback" /> */}

      {/* With useCallback */}
      <ChildComponent onClick={handleClickWithCallback} label="With Callback" />
    </div>
  );
};

export default ParentComponent;
