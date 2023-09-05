import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [users, setUsers] = useState(data);

  const removeUser = (name) => {
    const newUsers = users.filter((user) => user.name !== name);
    setUsers(newUsers);
  };

  const clearUsers = () => {
    setUsers([]);
  };
  return (
    <div>
      <h2>useState array example</h2>
      <ul>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <li>{user.name}</li>
              <button type="button" onClick={() => removeUser(user.name)}>
                remove
              </button>
            </div>
          );
        })}
      </ul>
      <button
        type="button"
        onClick={clearUsers}
        className="btn"
        style={{ marginTop: '2rem' }}
      >
        Clear Users
      </button>
    </div>
  );
};

export default UseStateArray;
