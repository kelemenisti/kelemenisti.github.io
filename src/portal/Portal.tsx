import React from 'react';
import ReactDOM from 'react-dom';

export function Portal() {
  return (
    <div style={{ width: '50px' }}>
      <span>Parent</span>
      <Modal />
    </div>
  );
}

const Modal = () =>
  ReactDOM.createPortal(
    <div style={{ border: '1px solid black' }}>
      <div>This is a modal</div>
      <button>Hey!</button>
    </div>,
    document.body
  );
