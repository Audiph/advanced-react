import React from 'react';

const Person = ({ name, nickName, images }) => {
  return (
    <div>
      <img src={images[0].small.url} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  );
};

export default Person;
