import React from 'react';

export class ErrorBoundary extends React.Component {
  render() {
    return (
      <div>
        <h1>Error boundary</h1>
        <Parent>
          <Child />
        </Parent>
        <Parent>
          <Child />
        </Parent>
      </div>
    );
  }
}

class Parent extends React.Component {
  state = { hasErrors: false };

  static getDerivedStateFromError() {
    return { hasErrors: true };
  }

  componentDidCatch(error: Error) {
    alert(error);
  }

  render() {
    if (this.state.hasErrors) {
      return <h3>Error in Child</h3>;
    }
    return this.props.children;
  }
}

class Child extends React.Component {
  state = { counter: 0 };

  render() {
    if (this.state.counter === 3) {
      throw new Error('crashed');
    }
    return (
      <div>
        <h3>Child component</h3>
        <p>{this.state.counter}</p>
        <button onClick={() => this.setState((state: any) => ({ counter: state.counter + 1 }))}>Increment</button>
      </div>
    );
  }
}
