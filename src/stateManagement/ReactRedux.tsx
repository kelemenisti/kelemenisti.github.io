import React from 'react';
import { createStore } from 'redux';
import { connect, ConnectedProps } from 'react-redux';

const initialValue = { init: false, items: [] as number[] };
type ItemState = typeof initialValue;

function reducer(state: ItemState = initialValue, action: any) {
  switch (action.type) {
    case 'load':
      return { ...state, init: true, items: action.payload };
    case 'reset':
      return { init: false, items: [] };
    default:
      return state;
  }
}

export const store = createStore(reducer);

function mapStateToProps(state: ItemState) {
  return {
    init: state.init,
    items: state.items
  };
}

const mapDispatchToProps = {
  load: (value: number[]) => ({ type: 'load', payload: value }),
  reset: () => ({ type: 'reset' })
};

const connector = connect(mapStateToProps, mapDispatchToProps);

class ReactRedux extends React.Component<ConnectedProps<typeof connector>> {
  state = {
    init: false,
    items: []
  };

  componentDidMount() {
    this.props.load([99, 98]);
  }

  render() {
    return (
      <div>
        <h3>React Redux</h3>
        <p>init: {this.props.init.toString()}</p>
        <p>items: {this.props.items.toString()}</p>
        <button onClick={() => this.props.reset()}> Clear</button>
      </div>
    );
  }
}

export default connector(ReactRedux);
