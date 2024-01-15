import React, { useState, useEffect } from "react";

function ExampleComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Side effect or data fetching logic
    const mounting = async () => {
      console.log("Component Data User dipasang");
    };
    const unmounting = async () => {
      console.log("Component Data User dilepas");
    };
    mounting();
    return () => {
      unmounting();
    };
  }, []); // Empty dependency array means the effect runs once after initial render

  return (
    <div>
      Users
      {data && data.map((user, key) => <p key={key}>{user.firstName}</p>)}
    </div>
  );
}

export default ExampleComponent;
