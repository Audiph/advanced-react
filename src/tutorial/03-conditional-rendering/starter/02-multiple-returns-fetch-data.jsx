import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newUser = await fetch(url).then((res) => res.json());
        setUser(newUser);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (user === null) return <h2>Loading...</h2>;

  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        src={avatar_url}
        alt={name}
        style={{ width: '150px', borderRadius: '25px' }}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
