import React, { useEffect, useState } from 'react';

function MainConcepts() {
  const [animal, setAnimal] = useState('Cats');
  const [date, setDate] = useState(new Date());

  const toggleAnimal = () => {
    setAnimal(animal === 'Cats' ? 'Dogs' : 'Cats');
  };

  const jsxExpression = () => {
    return <span>This is an embedded JSX expression.</span>;
  };

  const updateDate = () => {
    setDate(new Date());
  };

  useEffect(() => {
    const timer = setInterval(updateDate, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={{ margin: '20px' }}>
      <h1>JSX</h1>
      <p>This is a paragraph created using a JSX {'<p>'} tag</p>
      <h1>Embedding Expressions in JSX</h1>
      <div>
        <div onClick={toggleAnimal}>
          You can also embed expressions inside a JSX tag.<br></br> Click on this paragraph to toggle between cats and
          dogs.
        </div>
        <div>{animal}</div>
      </div>
      <h1>Embedding JSX in JSX</h1>
      <div>You can also embed other JSX expressions: {jsxExpression()}</div>
      <h1>DOM updates</h1>
      <div>
        This is thie only node that gets updated when the date changes: <h3>{date.toLocaleTimeString()}</h3>
      </div>
      <h1>Child component</h1>
      <ChildComponent title="Child component title" />
    </div>
  );
}

interface ChildComponentProps {
  title: string;
}

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  return <p>Title: {props.title}</p>;
};

export default MainConcepts;
