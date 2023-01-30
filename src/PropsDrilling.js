function Header(props) {
  return <div>Level Three: {props.username}</div>;
}

function Main(props) {
  return <Header username={props.username} />;
}

function Profile(props) {
  return <Main username={props.username} />;
}

export default function PropsDrilling() {
  const username = 'Antje';
  return (
    <div>
      <h1>PropsDrilling</h1>
      <Profile username={username} />
    </div>
  );
}
