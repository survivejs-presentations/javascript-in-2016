import React from 'react';

export default class App extends React.Component {
  state = { name: 'Class demo' }
  constructor(props) {
    super(props);

    this.privateProperty = 'private';
  }
  render() {
    const privateProperty = this.privateProperty;
    const name = this.state.name
    const notes = this.props.notes;

    ...
  }
  handleClick = () => { ... }
}