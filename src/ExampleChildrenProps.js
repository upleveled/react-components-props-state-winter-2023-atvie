function Post(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <span>date: {props.date}</span>
      <section>{props.children}</section>
      <footer>written by: Jose all rights reserved</footer>
      <hr />
    </>
  );
}

export default function ExampleChildrenProps() {
  return (
    <>
      <h1>Children Props Example</h1>
      <br />
      <hr />
      <Post title="Post 1" date="24/11/2022">
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <h3>subtitle</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
      </Post>
      <Post title="Post 2" date="24/12/2022">
        <h3>subtitle 2</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
      </Post>
      <Post title="Post 3" date="24/1/2023">
        <h3>subtitle 2</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <h3>subtitle 3</h3>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
      </Post>
    </>
  );
}
