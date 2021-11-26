import React, { useEffect, useState } from 'react';

export default function Lifecycle() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <br />
      <input type={'button'} onClick={() => setCounter((counter) => counter + 1)} value={'Add'} />
      <p>{counter}</p>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <ClassComponent value={counter} />
        <FunctionComponent value={counter} />
      </div>
    </div>
  );
}

interface ClassComponentProps {
  value: number;
}

interface ClassComponentState {
  time: string;
}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {
  state = {
    time: '-'
  };

  constructor(props: { value: number }) {
    super(props);
    console.log('CC: constructor');
  }

  // static getDerivedStateFromProps() {
  //   console.log('CC: getDerivedStateFromProps');
  //   return null;
  // }

  componentDidMount() {
    console.log('CC: component mounted');
    setTimeout(() => this.setState({ time: new Date().toLocaleTimeString() }), 5000);
  }

  shouldComponentUpdate(nextProps: Readonly<ClassComponentProps>, nextState: Readonly<ClassComponentState>): boolean {
    return nextProps.value % 3 === 0;
  }

  componentDidUpdate(prevProps: Readonly<ClassComponentProps>, prevState: Readonly<ClassComponentState>) {
    if (prevState.time !== this.state.time) {
      console.log('CC: this.state.time updated');
    }
    if (prevProps.value !== this.props.value) {
      console.log('CC: this.props.value updated');
    }
  }

  componentWillUnmount() {
    console.log('CC: component unmounted');
  }

  render() {
    console.log('CC: render');
    return (
      <div>
        <h3>Class component</h3>
        <div>
          <p>Counter: {this.props.value}</p>
          <p>Time: {this.state.time}</p>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line react/display-name
const FunctionComponent = React.memo(
  (props: { value: number }) => {
    const [time, setTime] = useState('-');
    console.log('FC: render');

    useEffect(() => {
      console.log('FC: useEffect - component mounted');
      setTimeout(() => setTime(new Date().toLocaleTimeString()), 7000);
    }, []);

    useEffect(() => {
      console.log('FC: useEffect - prop.value updated');
    }, [props.value]);

    useEffect(() => {
      console.log('FC: useEffect - time updated');
    }, [time]);

    useEffect(() => {
      return () => {
        console.log('FC: useEffect - component unmounted');
      };
    }, []);

    return (
      <div>
        <h3>Function component</h3>
        <div>
          <p>Counter: {props.value}</p>
          <p>Time: {time}</p>
        </div>
      </div>
    );
  },
  (prev, next) => next.value % 4 !== 0
);
