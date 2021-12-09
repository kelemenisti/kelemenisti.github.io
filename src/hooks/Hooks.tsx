import React, { useCallback, useEffect, useRef, useState } from 'react';

export class Hooks extends React.PureComponent {
  public render() {
    return (
      <div>
        <FunctionComponent />
      </div>
    );
  }
}

function FunctionComponent() {
  // const number = useNumberGenerator();
  // useEffect(() => {
  //   console.log('number was regenerated, new value: ' + number);
  //   return () => {
  //     console.log('unmount');
  //   };
  // }, [number]);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter % 2 == 0) {
      console.log(counter);
    }
  }, [counter]);
  // useLayoutEffect(() => {}, []);
  const [counter2, setCounter2] = useState(0);

  const increment1 = () => setCounter((counter) => counter + 1);
  const increment2 = useCallback(() => setCounter2((counter) => counter + 1), [counter2]);

  const value = useRef(0);

  return (
    <div>
      <h1>Hooks</h1>
      <p>{counter}</p>
      <button onClick={increment1}>Increment1</button>
      {/*<p>{number}</p>*/}
      <p>{counter2}</p>
      <Child onClick={increment2} />
      <p>{value.current}</p>
      <button
        onClick={() => {
          value.current = value.current + 1;
          console.log(value.current);
        }}>
        Increment
      </button>
    </div>
  );
}

// eslint-disable-next-line react/display-name
const Child = React.memo((props: { onClick: () => void }) => {
  console.log('Child is rerendering');
  return <button onClick={props.onClick}>Increment2</button>;
});

function useNumberGenerator() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setNumber(Math.ceil(Math.random() * 10));
    }, 3000);
  }, []);

  return number;
}
