import React, {Component} from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router';

import '../css/fonts/fontawesome-free/css/all.css';
import '../css/fonts/simple-line-icons/css/simple-line-icons.css';

class LandingMenu extends Component{
  constructor(props){
    super(props);
    this.RouterHandle = this.RouterHandle.bind(this);
  }
  state = {
    Design: false,
    Chart:false,
    About: false
  }

 RouterHandle = (route) =>{this.props.history.push("/" + route)}

  render(){

    return(
      <section className="content-section landing-menu text-white text-center FocusCenter" id="Menu">
        <div className="container mt-5">
          <div className="row align-top">
            <h1 className="col-12 pb-5">Menu</h1>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 PopOut"  onClick={() => this.RouterHandle("designs")}>
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="icon-screen-smartphone"></i>

              </span>
              <h4>
                <strong>Graphics</strong>
              </h4>
              <p className="text-faded mb-0">Designs for logos,social media headers, album art, and more!</p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5 mb-lg-0 PopOut" onClick={() => this.RouterHandle("chart")}>
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="fas fa-chart-bar"></i>
              </span>
              <h4>
                <strong>Data Representation</strong>
              </h4>
              <p className="text-faded mb-0">Responsive designs to accurately and easily represent data.</p>
            </div>
            <div className="col-lg-4 col-md-12 mb-5 mb-md-0 PopOut" onClick={() => this.RouterHandle("about")}>
              <span className="service-icon rounded-circle mx-auto mb-3">
                <i className="far fa-file"></i>
              </span>
              <h4>
                <strong>Resume</strong>
              </h4>
              <p>A strong background in customer-focused experience, matched with many certifications. </p>
            </div>
          </div>
        </div>
      </section>
      )
    }
}
export default withRouter(LandingMenu);
