import React, { useState, useEffect } from 'react';
import { range } from 'lodash';
import { format } from 'date-fns';

const OptimalComponent = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const newData = range(1, 1000).map(num => num * 2);
    setData(newData);

    setCurrentDate(format(new Date(), 'MMMM do yyyy, h:mm:ss a'));
  }, []);

  return (
    <div>
      <p>Current Date: {currentDate}</p>
      {data.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};

export default OptimalComponent;
