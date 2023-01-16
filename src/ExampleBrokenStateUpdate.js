// DON'T USE THIS CODE, IT IS INTENTIONALLY BROKEN
export default function ExampleBrokenStateUpdate() {
  let count = 0;
  return (
    <>
      <h1>Broken State Update</h1>
      {count}
      <button
        onClick={() => {
          count = count + 1;
          console.log('count', count);
        }}
      >
        +
      </button>
    </>
  );
}
