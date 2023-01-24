import { useState } from 'react';

export default function ExampleControlledCheckbox() {
  // 1. create the state variable
  const [isChecked, setIsChecked] = useState(false);

  // DON'T USE THIS PLEASE!!!
  // const input = document.querySelector('.myInput');

  // 3. update the variable after some trigger i.e. onChange

  return (
    <>
      <h1>checkbox Controlled Component</h1>
      is {isChecked ? '' : 'not'} checked!
      <br />
      is {isChecked || 'not'} checked!
      <br />
      {/* 2. use the variable as the value of the element */}
      <input
        className="myInput"
        checked={isChecked}
        type="checkbox"
        onChange={(event) => setIsChecked(event.currentTarget.checked)}
      />
    </>
  );
}
