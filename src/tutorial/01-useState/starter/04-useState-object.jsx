import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Jeff',
    age: 26,
    hobby: 'listening to music',
  });
  // const [name, setName] = useState('Jeff');
  // const [age, setAge] = useState(26);
  // const [hobby, setHobby] = useState('listening to music');

  const displayPerson = () => {
    // setName('Marc');
    // setAge('24');
    // setHobby('Playing Piano');
    setPerson({
      name: 'Marc',
      age: 24,
      hobby: 'playing piano',
    });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoy: {person.hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        Show Marc
      </button>
    </>
  );
};

export default UseStateObject;
