import { useState } from 'react';

const ToggleChallenge = () => {
  const [showDiv, setShowDiv] = useState(false);

  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  return (
    <div>
      <button className="btn" onClick={handleClick}>
        toggle alert
      </button>
      {showDiv && <Alert />}
    </div>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
