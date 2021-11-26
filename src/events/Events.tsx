import React, { ChangeEvent, useState } from 'react';

export default function Events() {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('blurred');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => {
    setMessage('focused');
  };

  const handleBlur = () => {
    setMessage('blurred');
  };

  const handleClick = () => {
    setMessage('clicked');
  };

  return (
    <div>
      <br />
      <input value={value} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} />
      <input type={'button'} value={'Click'} onClick={handleClick} />
      <p>{message}</p>
      <p>Value: {value}</p>
    </div>
  );
}
