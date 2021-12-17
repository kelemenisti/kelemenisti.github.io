import React from 'react';
import HOCExample from './hoc/HOCExample';

function CompositionVsInheritance() {
  return (
    <div style={{ margin: '20px' }}>
      <h1>Containment</h1>
      <Containment />
      <h1>Specialization</h1>
      <Specialization />
      <h1>HoC</h1>
      <HOCExample />
    </div>
  );
}

const Containment = () => {
  return (
    <Container>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Container>
  );
};

const Container = (props: any) => {
  return <div style={{ width: '200px', border: '5px solid red' }}>{props.children}</div>;
};

const Specialization = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
      <BorderContainer />
      <p></p>
      <DottedBorderContainer />
    </div>
  );
};

const BorderContainer = (props: any) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100px',
        height: '100px',
        borderWidth: '5px',
        borderColor: 'red',
        borderStyle: props.borderStyle || 'solid'
      }}>
      Content
    </div>
  );
};

const DottedBorderContainer = () => {
  return <BorderContainer borderStyle="dotted" />;
};

export default CompositionVsInheritance;
