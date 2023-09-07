import { useEffect, useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  const sayHello = () => {
    console.log('hello');
  };

  useEffect(() => {
    console.log('hello world!');
  }, []);

  sayHello();

  return (
    <div>
      <h1>value : {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
