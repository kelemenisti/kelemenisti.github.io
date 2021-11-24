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
    <>
      <p>This is a paragraph created using a JSX {'<p>'} tag</p>
      <div>
        <div onClick={toggleAnimal}>
          You can also embed expressions inside a JSX tag.<br></br> Click on this paragraph to toggle between cats and
          dogs.
        </div>
        <div>{animal}</div>
      </div>
      <div>You can also embed other JSX expressions: {jsxExpression()}</div>
      <div>This is thie only node that gets updated when the date changes: {date.toLocaleTimeString()}</div>
      <ChildComponent title="Child component title" />
    </>
  );
}

interface ChildComponentProps {
  title: string;
}

const ChildComponent: React.FC<ChildComponentProps> = (props) => {
  return <p>Title: {props.title}</p>;
};

export default MainConcepts;
