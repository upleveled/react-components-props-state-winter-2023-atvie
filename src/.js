import { useState } from 'react';

export default function ExampleState() {
  // 1. Declare a state variable called "count", with
  // the default value 0
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>State</h1>
      {/* 2. Use the state variable */}
      Count: {count}
      <button
        onClick={() =>
          // 3. Set the state variable to a new value
          setCount(count + 1)
        }
      >
        +
      </button>
      <button
        onClick={() =>
          // 3. Set the state variable to a new value
          setCount(count - 1)
        }
      >
        -
      </button>
    </>
  );
}
