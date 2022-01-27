import React, { useEffect } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const itemSlice = createSlice({
  name: 'item',
  initialState: { init: false, items: [] as number[] },
  reducers: {
    load: (state, action) => {
      state.init = true;
      state.items = action.payload;
    },
    reset: (state) => {
      state.items = [];
      state.init = false;
    }
  }
});

export const { load, reset } = itemSlice.actions;
export const store = configureStore({ reducer: { item: itemSlice.reducer } });

export function ReduxToolkit() {
  const init = useSelector((state: any) => state.item.init);
  const items = useSelector((state: any) => state.item.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(load([1, 1, 1, 1]));
  }, []);

  return (
    <div>
      <h3>Redux Toolkit</h3>
      <p>init: {init.toString()}</p>
      <p>items: {items.toString()}</p>
      <button onClick={() => dispatch(reset())}> Clear</button>
    </div>
  );
}
