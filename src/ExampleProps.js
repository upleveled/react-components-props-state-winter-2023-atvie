function Profile(props) {
  console.log('name', props.name);
  return (
    <>
      Name: {props.name}
      <br />
      Has an animal of type {props.animal.type} with a name of{' '}
      {props.animal.name}
    </>
  );
}

export default function ExampleProps() {
  const userName = 'karl';
  const animal = {
    type: 'dog',
    name: 'karl',
  };

  return (
    <div>
      <h1>Props</h1>
      <Profile name={userName} animal={animal} />
    </div>
  );
}
