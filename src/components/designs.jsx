import React, {Component} from 'react';
import NavBar from './navbar';
import Images from './images';
import Footer from './footer';
import '../css/portfolio.css';

export default class Designs extends Component{
  componentWillMount(){window.scrollTo(0, 0)}
  render(){
    return(
      <div>
        <NavBar></NavBar>
        <Images></Images>
        <Footer></Footer>
      </div>
      )
    }

}
