import React, { useRef, useEffect } from 'react';

const DirectDOMManipulation = () => {
  // Create a ref to hold a reference to the DOM element
  const myElementRef = useRef(null);

  // useEffect hook to perform direct DOM manipulation
  useEffect(() => {
    // Access the DOM element using the ref
    const myElement = myElementRef.current;

    // Check if the element exists before manipulating it
    if (myElement) {
      // Direct DOM manipulation - changing the background color
      myElement.style.backgroundColor = 'lightblue';

      // Adding an event listener directly to the DOM element
      myElement.addEventListener('click', handleClick);

      // Cleanup function to remove the event listener when the component is unmounted
      return () => {
        myElement.removeEventListener('click', handleClick);
      };
    }
  }, []);

  // Event handler for the direct DOM manipulation example
  const handleClick = () => {
    alert('Direct DOM manipulation!');
  };

  return (
    <div>
      <h1>Direct DOM Manipulation Example</h1>
      <div ref={myElementRef}>Hover over me</div>
    </div>
  );
};

export default DirectDOMManipulation;
