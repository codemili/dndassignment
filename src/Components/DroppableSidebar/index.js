import React, { Component } from 'react'


export default class DroppableSidebar extends Component {
  constructor(props) {
    super(props);
  }

  drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('transfer');
    e.target.appendChild(document.getElementById(data));
  };

  itAllowToDrop = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div
        id={this.props.id}
        onDrop={this.drop}
        onDragOver={this.itAllowToDrop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
