function Header(props) {
  return <div>Level Three username: {props.username}</div>;
}

function Main(props) {
  return <div>Main {props.children}</div>;
}
function Profile(props) {
  return (
    <div>
      Profile {props.username} {props.children}
    </div>
  );
}

export default function ChildrenProp() {
  const username = 'Antje';
  return (
    <div>
      <h1>ChildrenProp</h1>
      <Profile username={username}>
        <Main>
          <Header username={username} />
        </Main>
      </Profile>
    </div>
  );
}
