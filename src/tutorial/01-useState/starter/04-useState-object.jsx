import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('Jeff');
  const [age, setAge] = useState(26);
  const [hobby, setHobby] = useState('listening to music');

  const displayPerson = () => {
    setName('Marc');
    setAge('24');
    setHobby('Playing Piano');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h4>Enjoy: {hobby}</h4>
      <button type="button" className="btn" onClick={displayPerson}>
        Show Marc
      </button>
    </>
  );
};

export default UseStateObject;
