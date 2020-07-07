import React, { Component } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';

export default class Heading extends Component {
  render() {
    // const { showTopbar } = this.state;
    return (
      <div className="navbar-container">
        <Navbar></Navbar>
      </div>
    );
  }
}
