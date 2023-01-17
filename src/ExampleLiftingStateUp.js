/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { useState } from 'react';
import styles from './Form.module.scss';

const buttonStyles = (inputValue) => css`
  background-color: ${inputValue === 'red' ? 'white' : '#010f14'};
  color: ${inputValue === 'red' ? 'red' : '#eaabf5'};
`;

// To Lift state up
// 1. move the state declarations to the parent component
// 2. pass the current value of the state to the children as needed
// 3. pass the update state functions to the children as needed

function FormComponent(props) {
  // const [inputValue, setInputValue] = useState(''); // old version
  // 1. Declare state variable to store the input value

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      {/* 2. Use the state variable as the value of the input */}
      <input
        value={props.inputValue}
        onChange={(event) => {
          // 3. Update the state variable on input change
          props.inputUpdate(event.currentTarget.value);
        }}
      />
      <button
        css={buttonStyles(props.inputValue)}
        onClick={() => {
          console.log('update');
          props.titleUpdate(props.inputValue.toUpperCase());
        }}
      >
        Update
      </button>
    </form>
  );
}

function Post(props) {
  // const [titleContent, setTitleContent] = useState('initial title');  // old version

  return (
    <div style={{ border: '5px solid purple', borderRadius: '5em' }}>
      {/* <h1>{titleContent}</h1> // old version */}
      <h1>{props.title}</h1>
    </div>
  );
}

export default function ExampleLiftingStateUp() {
  const [titleContent, setTitleContent] = useState('initial title');
  const [inputValue, setInputValue] = useState(''); // old version
  // 1. Declare state variable to store the input value

  return (
    <>
      <FormComponent
        inputValue={inputValue}
        titleUpdate={setTitleContent}
        inputUpdate={setInputValue}
      />
      <br />
      <Post title={titleContent} />
    </>
  );
}
