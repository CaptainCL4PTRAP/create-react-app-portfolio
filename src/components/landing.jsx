import React, {Component} from 'react';
import VideoCover from 'react-video-cover';
import Top_Highway1 from '../img/Top_Highway.mp4';
import Top_Highway2 from '../img/Top_Highway.ogv';
import Top_Highway3 from '../img/Top_Highway.webm';

export default class Landing extends Component{
  snapToMenu(){
    var elmnt = document.getElementById("Menu");
    elmnt.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  render(){
    return(



      <div className="landingBackground">


<video className='bgVideo' autoPlay loop muted>
    <source src={Top_Highway1} type='video/mp4' />
    <source src={Top_Highway2} type='video/ogv' />
    <source src={Top_Highway3} type='video/webm' />

</video>

          <section className="FocusCenter text-white overlay">
            <header className="blurred">
              <div className="container text-center">
                <h1 className="mb-1">Logan Hein</h1>
                <h3 className="mb-5">
                  <em>Portfolio</em>
                </h3>
                <a className="btn btn-react btn-xl" onClick={this.snapToMenu} href="#about">Find Out More</a>
              </div>
            </header>
          </section>
      </div>
      )
    }
}
