import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import 'jquery';
import '../css/portfolio.css';



export default class NavBar extends Component{

  render(){
    return(
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top d-flex">
      <a className="navbar-brand d-none d-md-block mr-auto" href="#">Logan Hein: Portfolio</a>
      <a className="navbar-brand d-block d-md-none" href="#">LH: Portfolio</a>
      <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#MainMenu" aria-controls="MainMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse justify-content-end col-md-6 col-0"  id="MainMenu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/">Home </NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/designs">Designs</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/chart">Charts</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact className="nav-link" activeClassName="active" to="/about">About Me</NavLink>
          </li>
        </ul>

      </div>
    </nav>
      )
    }
}
