import React, { Dispatch, SetStateAction, useState } from 'react';

export default function LiftingStateUp() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <p>{value}</p>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Child value={value} setValue={setValue} index={1} />
        <Child value={value} setValue={setValue} index={2} />
        <Child value={value} setValue={setValue} index={3} />
      </div>
    </div>
  );
}

function Child(props: { value: number; setValue: Dispatch<SetStateAction<number>>; index: number }) {
  const handleClick = () => {
    props.setValue((value) => value + props.index);
  };
  return (
    <div>
      <h3>Child {props.index}</h3>
      <input type={'button'} value={`Increment with: ${props.index}`} onClick={handleClick} />
    </div>
  );
}
