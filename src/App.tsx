import React, { useState } from 'react';
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
import { Context } from './context/Context';
import { ErrorBoundary } from './ErrorBoundary';
import { Portal } from './portal/Portal';
import { PropType } from './proptypes/PropType';
import { ForwardingRef } from './forwardingRef/ForwardingRef';
import { StateManagement } from './stateManagement/StateManagement';
import { FormValidation } from './formValidation/FormValidation';
import { MUI } from './mui/MUI';
import { Button, Drawer, List, ListItem, ThemeProvider } from '@mui/material';
import { theme } from './mui/MyTheme';

function App() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button onClick={() => toggleDrawer(true)}>Menu</Button>
        <Drawer open={open} anchor={'left'} onClose={() => toggleDrawer(false)}>
          <List onClick={() => toggleDrawer(false)}>
            <ListItem>
              <Link to="/">Home</Link>
            </ListItem>
            <ListItem>
              <Link to="/main-concepts">Main Concepts</Link>
            </ListItem>
            <ListItem>
              <Link to="/conditional-rendering">Conditional Rendering </Link>
            </ListItem>
            <ListItem>
              <Link to="/lifecycle">Lifecycles</Link>
            </ListItem>
            <ListItem>
              <Link to="/events">Events</Link>
            </ListItem>
            <ListItem>
              <Link to="/form">Form</Link>
            </ListItem>
            <ListItem>
              <Link to="/state">Lifting State Up</Link>
            </ListItem>
            <ListItem>
              <Link to="/lists">Lists</Link>
            </ListItem>
            <ListItem>
              <Link to="/composition">Composition vs Inheritance</Link>
            </ListItem>
            <ListItem>
              <Link to="/hooks">Hooks</Link>
            </ListItem>
            <ListItem>
              <Link to="/fragments">Fragments</Link>
            </ListItem>
            <ListItem>
              <Link to="/context">Context</Link>
            </ListItem>
            <ListItem>
              <Link to="/error-boundary">Error Boundary</Link>
            </ListItem>
            <ListItem>
              <Link to="/forwarding-ref">Forwarding Ref</Link>
            </ListItem>
            <ListItem>
              <Link to="/portal">Portal</Link>
            </ListItem>
            <ListItem>
              <Link to="/prop-types">PropTypes </Link>
            </ListItem>
            <ListItem>
              <Link to="/state-management">State Management</Link>
            </ListItem>
            <ListItem>
              <Link to="/form-validation">Form Validation</Link>
            </ListItem>
            <ListItem>
              <Link to="/mui">Material UI</Link>
            </ListItem>
          </List>
        </Drawer>
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
            <Route path="/context" element={<Context />} />
            <Route path="/error-boundary" element={<ErrorBoundary />} />
            <Route path="/forwarding-ref" element={<ForwardingRef />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/prop-types" element={<PropType />} />
            <Route path="/state-management" element={<StateManagement />} />
            <Route path="/form-validation" element={<FormValidation />} />
            <Route path="/mui" element={<MUI />} />
          </Routes>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
