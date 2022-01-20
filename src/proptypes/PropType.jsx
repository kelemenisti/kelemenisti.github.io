import React from 'react';
import PropTypes from 'prop-types';

export class PropType extends React.Component {
  render() {
    return <Child title={'this is a title'} />;
  }
}

class Child extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </React.Fragment>
    );
  }
}

Child.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Child.defaultProps = {
  subtitle: 'Default subtitle'
};
