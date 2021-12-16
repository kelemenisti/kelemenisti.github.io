import React, { useContext } from 'react';

interface User {
  name: string;
  id: string;
  language: 'en' | 'de';
}

const user: User = { name: 'Istvan', id: 'istvan91', language: 'en' };

const UserContext = React.createContext({ user: {}, setLanguage: {} });

export class Context extends React.Component {
  state = user;

  setLanguage = (language: string) => this.setState((state) => ({ ...state, language }));

  render() {
    return (
      <UserContext.Provider value={{ user: this.state, setLanguage: this.setLanguage }}>
        <div>
          <Header />
          <h1>Context</h1>
        </div>
      </UserContext.Provider>
    );
  }
}

function Header() {
  return (
    <div
      style={{
        gap: '8px',
        backgroundColor: 'grey',
        height: '50px',
        justifyContent: 'flex-end',
        display: 'flex',
        alignItems: 'center'
      }}>
      <UserInfo />
      <Menu />
    </div>
  );
}

class UserInfo extends React.Component {
  // static contextType = UserContext;
  render() {
    const value = this.context;
    return (
      <div>
        <label>{value.user.name}</label>
        <br />
        <UserContext.Consumer>{(context: any) => <label>{context.user.id}</label>}</UserContext.Consumer>
      </div>
    );
  }
}

UserInfo.contextType = UserContext;

function Menu() {
  const value = useContext(UserContext) as any;
  return (
    <div>
      <button
        onClick={() => {
          value.setLanguage(value.user.language === 'en' ? 'de' : 'en');
        }}>
        Switch to {value.user.language === 'en' ? 'de' : 'en'}
      </button>
    </div>
  );
}
