import { useState } from 'react';

export default function ExampleEvents() {
  const [airline, setAirline] = useState('Air Berlin');
  return (
    <>
      <h1>Events</h1>
      <h2>onClick</h2>
      <button
        onClick={() => {
          console.log('log');
          // setAirline('Niki Air');
        }}
      >
        console.log
      </button>
      <h2>onChange</h2>
      <input
        value={airline}
        onChange={(event) => {
          // The current value of the text in the input
          console.log('event.currentTarget.value', event.currentTarget.value);
          setAirline(event.currentTarget.value);
        }}
      />
      <br />
      Airline: {airline}
    </>
  );
}
