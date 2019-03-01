import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import {Document} from 'react-pdf';
import ResSideBar from './resSideBar';
import NavBar from './navbar';
import Footer from './footer';

const mql = window.matchMedia(`(min-width: 800px)`);

export default class AboutMe extends Component{
  constructor(props) {
      super(props);
      this.state = {
        sidebarDocked: mql.matches,
        sidebarOpen: false
      };

      this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
      this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
      mql.addListener(this.mediaQueryChanged);
      window.scrollTo(0, 0);
    }


    onSetSidebarOpen(open) {
      this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
      this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {
      return (
        <div>
        <NavBar />
          <div>
            <img
              className=" d-block img-fluid Resume"
              src={require('../img/Resume.png')}
              alt="Resume"
            />
        </div>
        <Footer />
        </div>
      );
    }
  }
