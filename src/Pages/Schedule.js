import React, { useState, useEffect } from 'react';
import getEvents from '../API';

export default function Schedule() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures this runs only once

  return (
      <div>
          <button onClick={getEvents}>Click me</button>
          <div id="events"></div>
          <h1>Count: {count}</h1>

      </div>
  );
}