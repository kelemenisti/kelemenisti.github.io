import React from 'react';

function CompositionVsInheritance() {
  return (
    <>
      <h1>Containment</h1>
      <Containment />
      <h1>Specialization</h1>
      <Specialization />
    </>
  );
}

const Containment = () => {
  return (
    <Container>
      <ul>
        <li key={1}>1</li>
        <li key={1}>2</li>
        <li key={1}>3</li>
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
        width: '100px',
        height: '100px',
        borderWidth: '5px',
        borderColor: 'red',
        borderStyle: props.borderStyle || 'solid'
      }}></div>
  );
};

const DottedBorderContainer = () => {
  return <BorderContainer borderStyle="dotted" />;
};

export default CompositionVsInheritance;
