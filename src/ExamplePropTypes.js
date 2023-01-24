import PropTypes from 'prop-types';

function Card(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <img src="https://picsum.photos/200/300" alt="random" />
      <div>no. {props.number}</div>
      <p>{props.description}</p>
    </>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

const users = [
  {
    name: 'jose',
    age: 33,
    favoriteColors: ['red', 'green', 'yellow'],
  },
  {
    name: 'peter',
    age: 42,
    favoriteColors: ['blue', 'black', 'purple'],
  },
];

function Profile(props) {
  return (
    <>
      <h3>{props.user.name}</h3>
      <span>age: {props.user.age} </span>
      <ul>
        {props.user.favoriteColors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    favoriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default function ExamplePropTypes() {
  return (
    <>
      <h1>PropTypes</h1>
      <Card title="car" number={1} description="a good car for the family" />
      <Profile user={users[0]} />
      <Profile user={users[1]} />
    </>
  );
}
