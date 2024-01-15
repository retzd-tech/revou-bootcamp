import React, { useState, useEffect } from 'react';
import HeavyDataComponent from './HeavyDataComponent';
import MemoizedHeavyDataComponent from './MemoizedHeavyDataComponent';

const MemoComponent = () => {
  const [withoutMemoData] = useState("Render WITHOUT MEMO");
  const [withMemoData] = useState("Render WITH MEMO");

  useEffect(() => {
  }, []);

  return (
    <div>
      {/* Without React.memo */}
      {/* <HeavyDataComponent data={withoutMemoData} /> */}

      {/* With React.memo */}
      {/* <MemoizedHeavyDataComponent data={withMemoData} /> */}
    </div>
  );
};

export default MemoComponent;
