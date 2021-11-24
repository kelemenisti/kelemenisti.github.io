import React, { useState } from 'react';

function ConditionalRendering() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  const onLogout = () => {
    setIsLoggedIn(false);
  };
  const onLogin = () => {
    setIsLoggedIn(true);
  };

  return <>{isLoggedin ? <HomePage name="Sarah" onLogout={onLogout} /> : <LoginPage onLogin={onLogin} />}</>;
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
      <p>Welcome {name}!</p>
      <button onClick={onLogout}>Logout</button>
    </>
  );
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <>
      <p>Please log in first.</p>
      <button onClick={onLogin}>Login</button>
    </>
  );
};

export default ConditionalRendering;
