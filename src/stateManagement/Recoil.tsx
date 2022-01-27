import React, { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';

const itemState = atom({
  key: 'item',
  default: { init: false, items: [] as number[] }
});

export function Recoil() {
  const [state, setState] = useRecoilState(itemState);

  useEffect(() => {
    setState({ init: true, items: [1, 2, 3, 4] });
  }, []);

  return (
    <div>
      <h3>Recoil</h3>
      <p>init: {state.init.toString()}</p>
      <p>items: {state.items.toString()}</p>
      <button onClick={() => setState({ init: false, items: [] })}> Clear</button>
    </div>
  );
}
