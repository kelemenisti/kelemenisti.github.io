import React, { useState } from 'react';

const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function ListsAndKeys() {
  const [values, setValues] = useState(data);

  const deleteItem = (value: string) => {
    const filtered = values.filter((val) => val !== value);
    setValues(filtered);
  };

  return (
    <div style={{ margin: '20px' }}>
      {values.map((d) => (
        <h1
          key={d}
          style={{ width: '43px', border: '5px solid red' }}
          onClick={() => {
            deleteItem(d);
          }}>
          {d}
        </h1>
      ))}
    </div>
  );
}

export default ListsAndKeys;
