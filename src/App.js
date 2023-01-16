import './index.css';
import ExampleBrokenStateUpdate from './ExampleBrokenStateUpdate';
import ExampleEvents from './ExampleEvents';
import ExampleProps from './ExampleProps';
import ExampleState from './ExampleState';
import ExampleStyleProp from './ExampleStyleProp';

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
      <ExampleState />
      <ExampleEvents />
      <ExampleStyleProp />
      <ExampleBrokenStateUpdate />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
