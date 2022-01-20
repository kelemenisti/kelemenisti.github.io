import React, { Component, ForwardedRef, SyntheticEvent, useRef, useState } from 'react';

export function ForwardingRef() {
  return <UncontrolledComponent />;
}

function UncontrolledComponent() {
  const [message, setMessage] = useState('');
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: SyntheticEvent) => {
    setMessage(`Name: ${nameRef.current?.value}, Age: ${ageRef.current?.value}`);
    event.preventDefault();
  };

  return (
    <div>
      <br />
      <h3>Uncontrolled component</h3>
      <form onSubmit={handleSubmit}>
        <NameInput ref={nameRef} />
        <AgeInputWithLogging ref={ageRef} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  );
}

const withLogging = (Component: any): any => {
  class WithLogging extends React.Component<{ forwardedRef: React.Ref<HTMLInputElement> }> {
    componentDidMount() {
      console.log('logging stuff');
    }

    render() {
      return <Component ref={this.props.forwardedRef} />;
    }
  }

  return React.forwardRef((props, ref: ForwardedRef<HTMLInputElement>) => {
    return <WithLogging forwardedRef={ref} />;
  });
};

// eslint-disable-next-line react/display-name
const AgeInput = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => (
  <div>
    <input placeholder={'Age'} name={'age'} ref={ref} defaultValue={''} />
  </div>
));

const AgeInputWithLogging = withLogging(AgeInput);

// eslint-disable-next-line react/display-name
const NameInput = React.forwardRef((props, ref: React.Ref<HTMLInputElement>) => (
  <div>
    <input placeholder={'Name'} name={'name'} ref={ref} defaultValue={''} />
  </div>
));
