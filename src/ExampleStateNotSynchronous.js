import { useState } from 'react';

export default function ExampleStateNotSynchronous() {
  // 1. Declare a state variable called "count", with
  // the default value 0
  const [count, setCount] = useState(0);
  console.log('component body', count);

  return (
    <>
      <h1>ExampleStateNotSynchronous</h1>
      {/* 2. Use the state variable */}
      Count: {count}
      <button
        onClick={
          () => {
            // creating a newState variable to use in this handler scope
            const newCount = count + 1;
            // 3. Set the state variable to a new value
            setCount(newCount); // schedule a state update
            console.log('event handler body', newCount);
          }
          // here value is going to be updated in the next render
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
