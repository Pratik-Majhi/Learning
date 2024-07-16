import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const App = () => {
  const headersRef = useRef([]);

  useEffect(() => {
    gsap.from(headersRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <main>
      <h1 ref={el => headersRef.current[0] = el}>Here I am</h1>
      <h1 ref={el => headersRef.current[1] = el}>Here I try</h1>
      <h1 ref={el => headersRef.current[2] = el}>Here I do</h1>
    </main>
  );
};

export default App;
