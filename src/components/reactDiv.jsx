import React, { Component } from 'react';
import logo from '../logo.svg';


export default class ReactDiv extends Component {
  render() {
    return (

        <div className="ReactColor FocusCenter">
          <img src={logo} className="React-logo" alt="React Logo" />
          <p className="text-center ReactColor popTop">
            Built using the React UI Framework.
          </p>
      </div>

    );
  }
}
