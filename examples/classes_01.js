import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Class demo' }
    this.privateProperty = 'private';
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const privateProperty = this.privateProperty;
    const name = this.state.name
    const notes = this.props.notes;

    ...
  }
  handleClick() { ... }
}