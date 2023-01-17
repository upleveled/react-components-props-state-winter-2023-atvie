// children component
function Post(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <span>this post views: {props.views}</span>
      <div>is public: {props.isPublic}</div>
      {[true, false, null, undefined]} {/* react does't show this types*/}
      {JSON.stringify([true, false, null, undefined])}{' '}
      {/* you can still stringify */}
      {[NaN, 'jose', 123]}
      {/* react show this types*/}
      {/* { name: 'jose', age: 33 } */} {/* react breaks with objects */}
      {JSON.stringify({ name: 'jose', age: 33 })}
      {/* you can still stringify */}
    </>
  );
}

// children component
function Profile({ name, emoji, stars } /* props destructuring */) {
  return (
    <>
      <h3>User: {name}</h3>
      <div>{emoji}</div>
      <div>stars: {stars}</div>
    </>
  );
}

// parent component
export default function ExamplePropsDestructuringAndMapping() {
  const users = ['jose', 'karl', 'antje'];

  return (
    <>
      <Profile name="jose" emoji="👨‍💻" stars={5} />
      <Post title="Post 1" content="content 1" views={3} isPublic={true} />
      <Post title="Post 2" content="content 2" views={5} isPublic={false} />
      <Post title="Post 3" content="content 3" views={0} isPublic={false} />

      {/* mapping over a variable */}
      <hr />
      {['jose', 'karl', 'antje']}
      <hr />
      <h1>mapping over a variable</h1>
      {users.map((current) => {
        return <div key={current}> {`username: ${current}`} </div>;
      })}
      <hr />
      <h1>mapping over a declared array</h1>
      {['jose', 'karl', 'antje'].map((current) => {
        return <div key={current}> {`username: ${current}`} </div>;
      })}
      <hr />
      <h1>hard coded array</h1>
      {[
        <div key="jose"> username: jose </div>,
        <div key="karl"> username: karl </div>,
        <div key="antje"> username: antje </div>,
      ]}
    </>
  );
}
