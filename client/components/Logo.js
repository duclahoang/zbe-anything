import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from '../utils/classNames';
import '../css/_Logo.css';
import logo from '../static/images/logo.svg';

export default class Logo extends Component {
  render() {
    const logoClassNames = classNames({
      'la-logo-icon': true,
      'la-logo-icon--big': this.props.big,
    });
    
    return (
      <div className="la-logo-container">
        { this.props.welcome ?
          <div className="welcome-bubble">
            <div className="welcome-bubble-text" >
            Welcome to Zbe Anything, the platform for knowledge discovery that helps you understand any topic through the most efficient paths, as voted by the community.
            </div>
            <div className="welcome-bubble-bubble" />
          </div> : ''
        }

        <Link to="/">
          <img className={logoClassNames} src={logo} alt="logo"/>
        </Link>
      </div>
    );
  }
}

Logo.deaultProps = {
  big: false,
  welcome: false,
};


