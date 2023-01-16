import './index.css';
import ExampleProps from './ExampleProps';

function Header(props) {
  return (
    <header>
      <a href="https://upleveled.io">UpLeveled</a>
      <br />
      Mode: {props.mode}
    </header>
  );
}

export default function App() {
  return (
    <>
      <Header mode="dark" />
      <ExampleProps />
    </>
  );
}
