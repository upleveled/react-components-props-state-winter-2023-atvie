import { useState } from 'react';

function BulbIfElse(props) {
  if (!props.isOn) {
    return null;
  }

  return <div>BULB IF ELSE: I am giving you some light</div>;
}

function BulbBooleanOperator(props) {
  return !props.isOn || <div>BULB BOOLEAN: I am giving you some light</div>;
}

function BulbTernaryOperator(props) {
  return props.isOn ? (
    <div>BULB BOOLEAN: I am giving you some light</div>
  ) : null;
}

export default function ExampleConditionalRendering() {
  const [bulbIfElseIsOn, setBulbIfElseIsOn] = useState(true);
  return (
    <>
      <BulbIfElse isOn={bulbIfElseIsOn} />
      <button onClick={() => setBulbIfElseIsOn(!bulbIfElseIsOn)}>
        turn {bulbIfElseIsOn ? 'off' : 'on'} the light
      </button>
      <BulbBooleanOperator isOn={true} />
      <BulbTernaryOperator isOn={false} />
    </>
  );
}
