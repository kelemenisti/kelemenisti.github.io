import React, { useEffect, useReducer } from 'react';
import { Action } from 'redux';

const initialState = { initialized: false, items: [] as number[] };
type ItemState = typeof initialState;

function reducer(state: ItemState, action: Action): ItemState {
  switch (action.type) {
    case 'load':
      return { initialized: true, items: [1, 2, 3, 4, 5] };
    case 'reset':
      return { initialized: false, items: [] };
    default:
      return state;
  }
}

export function ReducerHook() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'load' });
  }, []);

  return (
    <div>
      <h3>Reducer Hook</h3>
      <p>init: {state.initialized.toString()}</p>
      <p>items: {state.items.toString()}</p>
      <button onClick={() => dispatch({ type: 'reset' })}> Clear</button>
    </div>
  );
}
