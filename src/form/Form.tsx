import React, { ChangeEvent, SyntheticEvent, useRef, useState } from 'react';

export default function Form() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <ControlledComponent />
      <UncontrolledComponent />
    </div>
  );
}

function ControlledComponent() {
  const [values, setValues] = useState({ name: '', age: '' });
  const [message, setMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'name') {
      setValues((values) => ({ ...values, name: event.target.value }));
    } else {
      setValues((values) => ({ ...values, age: event.target.value }));
    }
  };

  const handleSubmit = (event: SyntheticEvent) => {
    setMessage(`Name: ${values.name}, Age: ${values.age}`);
    event.preventDefault();
  };

  return (
    <div>
      <br />
      <h3>Controlled component</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input placeholder={'Name'} name={'name'} value={values.name} onChange={handleChange} />
        </div>
        <div>
          <input placeholder={'Age'} name={'age'} value={values.age} onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  );
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
        <div>
          <input placeholder={'Name'} name={'name'} ref={nameRef} defaultValue={''} />
        </div>
        <div>
          <input placeholder={'Age'} name={'age'} ref={ageRef} defaultValue={''} />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>{message}</p>
    </div>
  );
}
