import React, {Component} from 'react';
import NavBar from './navbar';
import Landing from './landing';
import LandingMenu from './landingMenu';
import ReactDiv from './reactDiv';
import Footer from './footer';
import '../css/portfolio.css';

export default class Home extends Component{
  componentWillMount(){window.scrollTo(0, 0)}
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Landing></Landing>
        <LandingMenu></LandingMenu>
        <ReactDiv></ReactDiv>
        <Footer></Footer>
      </div>
      )
    }
}
