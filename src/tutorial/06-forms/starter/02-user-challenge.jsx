import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState(data);

  const handleRemoveUser = (id) => {
    const removeUser = users.filter((item) => item.id !== id);
    setUsers(removeUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // do something
    if (!name) return;
    const updatedUsers = [...users, { id: Date.now() + 1, name }];
    setUsers(updatedUsers);
    setName('');
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {users.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button className="btn" onClick={() => handleRemoveUser(id)}>
              remove
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
