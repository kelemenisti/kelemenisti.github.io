import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import ConditionalRendering from './conditionalRendering/ConditionalRendering';
import Home from './Home';
import MainConcepts from './mainConcepts/MainConcepts';
import ListsAndKeys from './listsAndKeys/ListsAndKeys';
import CompositionVsInheritance from './compositionVsInheritance/CompositionVsInheritance';
import ThinkingInReact from './thinkingInReact/ThinkingInReact';
import Lifecycle from './lifecycle/Lifecycle';
import Events from './events/Events';
import Form from './form/Form';
import LiftingStateUp from './state/LiftingStateUp';
import Fragments from './fragments/Fragments';
import { Hooks } from './hooks/Hooks';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> | <Link to="/main-concepts">Main Concepts</Link> |{' '}
      <Link to="/conditional-rendering">Conditional Rendering </Link> | <Link to="/lifecycle">Lifecycles</Link> |{' '}
      <Link to="/events">Events</Link> | <Link to="/form">Form</Link> | <Link to="/state">Lifting State Up</Link> |{' '}
      <Link to="/lists">Lists</Link> | <Link to="/composition">Composition vs Inheritance</Link> |{' '}
      <Link to="/example">Example</Link> | <Link to="/hooks">Hooks</Link> | <Link to="/fragments">Fragments</Link>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main-concepts" element={<MainConcepts />} />
          <Route path="/conditional-rendering" element={<ConditionalRendering />} />
          <Route path="/lists" element={<ListsAndKeys />} />
          <Route path="/lifecycle" element={<Lifecycle />} />
          <Route path="/events" element={<Events />} />
          <Route path="/form" element={<Form />} />
          <Route path="/state" element={<LiftingStateUp />} />
          <Route path="/composition" element={<CompositionVsInheritance />} />
          <Route path="/example" element={<ThinkingInReact />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/fragments" element={<Fragments />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
