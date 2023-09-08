import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      const resp = await fetch(url);

      if (!resp.ok) {
        setIsError(true);
        setIsLoading(false);
        return;
      }

      const newUser = await resp.json();

      setUser(newUser);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>There was an error...</h2>;

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
