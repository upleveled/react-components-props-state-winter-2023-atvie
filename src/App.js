import './index.css';
import ExampleBrokenStateUpdate from './ExampleBrokenStateUpdate';
import ExampleChildrenProps from './ExampleChildrenProps';
import ExampleClassToFunction from './ExampleClassToFunction';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleControlledCheckbox from './ExampleControlledCheckbox';
import ExampleEvents from './ExampleEvents';
import ExampleLiftingStateUp from './ExampleLiftingStateUp';
import ExampleProps from './ExampleProps';
import ExamplePropsDestructuringAndMapping from './ExamplePropsDestructuringAndMapping';
import ExamplePropTypes from './ExamplePropTypes';
import ExampleState from './ExampleState';
import ExampleStateNotSynchronous from './ExampleStateNotSynchronous';
import ExampleStyleProp from './ExampleStyleProp';
import ExampleUpdatingStateWithArrays from './ExampleUpdatingStateWithArrays';
import ExampleUseEffectDataFetching from './ExampleUseEffectDataFetching';

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
      <br />
      <br />
      <br />
      <ExampleState />
      <br />
      <br />
      <br />
      <ExampleEvents />
      <br />
      <br />
      <br />
      <ExampleStyleProp />
      <br />
      <br />
      <br />
      <ExampleBrokenStateUpdate />
      <br />
      <br />
      <br />
      <ExampleStateNotSynchronous />
      <br />
      <br />
      <br />
      <ExamplePropsDestructuringAndMapping />
      <br />
      <br />
      <br />
      <ExampleConditionalRendering />
      <br />
      <br />
      <br />
      <ExampleClassToFunction
        user={{
          details: 'details',
          name: 'jose',
          imageAlt: 'this is an image',
          image:
            'https://api.memegen.link/images/buzz/memes/memes_everywhere.png',
        }}
      />
      <br />
      <br />
      <br />
      <ExampleLiftingStateUp />
      <br />
      <br />
      <br />
      <br />
      <ExampleChildrenProps />
      <br />
      <br />
      <br />
      <ExamplePropTypes />
      <br />
      <br />
      <br />
      <ExampleControlledCheckbox />
      <br />
      <br />
      <br />
      <ExampleUpdatingStateWithArrays />
      <br />
      <br />
      <br />
      <ExampleUseEffectDataFetching />

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
      <br />
      <br />
      <br />
    </>
  );
}
