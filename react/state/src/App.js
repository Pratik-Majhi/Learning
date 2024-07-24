// import React, { useState } from 'react'


// function App() {
//   const [state,setState]=useState(5);
//   const isEven=state%2===0;
//   return (
//     <>
//       <p>This is my {state} and it is {isEven?"even":"odd"}</p>
//       <button onClick={()=> setState(state+1)}> 
//           click
//       </button>
//     </>
//   )
// }

// export default App
// 

// import React, { useState, useEffect } from 'react';

// function FetchData() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // This code runs only once when the component mounts
//     fetch('https://api.example.com/data')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []);

//   return (
//     <div>
//       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default FetchData;
// import React, { useEffect, useState } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)}>+</button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// export default App
import React, { useState } from 'react';

function App() {
  // State variables to manage form inputs
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handler to reset form
  const resetForm = () => {
    setName('');
    setAge('');
    setSubmitted(false);
  }

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Simple Form</h1>
      {/* Form to capture user input */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>Reset</button>
      </form>

      {/* Display the submitted data */}
      {submitted && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
        </div>
      )}
    </div>
  );
}

export default App;
