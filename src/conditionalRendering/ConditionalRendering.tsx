import React, { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const onLogout = () => {
    setIsLoggedIn(false);
  };
  const onLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div style={{ margin: '20px' }}>
      {isLoggedin ? <HomePage name="Sarah" onLogout={onLogout} /> : <LoginPage onLogin={onLogin} />}
    </div>
  );
}

interface HomePageProps {
  name: string;
  onLogout: () => void;
}

interface LoginPageProps {
  onLogin: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ name, onLogout }) => {
  return (
    <>
      <h1>Welcome {name}!</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <>
      <h1>Please log in first.</h1>
      <button onClick={onLogin}>Login</button>
    </>
  );
};

export default ConditionalRendering;
