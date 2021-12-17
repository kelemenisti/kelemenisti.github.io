import React from 'react';

function HOCExample() {
  return (
    <>
      <App1 />
      <App2 />
      <App3 />
    </>
  );
}

const BaseApp = (props: any) => {
  return <div>{props.title}</div>;
};

function withTitle(Component: any, title: string) {
  // eslint-disable-next-line react/display-name
  return () => {
    return <Component title={title} />;
  };
}

const App1 = withTitle(BaseApp, 'App1');
const App2 = withTitle(BaseApp, 'App2');
const App3 = withTitle(BaseApp, 'App3');

export default HOCExample;
