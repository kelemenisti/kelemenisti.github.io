import ReactRedux, { store as store1 } from './ReactRedux';
import React from 'react';
import { Provider } from 'react-redux';
import { ReduxToolkit, store as store2 } from './ReduxToolkit';
import { Recoil } from './Recoil';
import { RecoilRoot } from 'recoil';

export function StateManagement() {
  return (
    <div>
      <Provider store={store1}>
        <ReactRedux />
      </Provider>
      <Provider store={store2}>
        <ReduxToolkit />
      </Provider>
      <RecoilRoot>
        <Recoil />
      </RecoilRoot>
    </div>
  );
}
