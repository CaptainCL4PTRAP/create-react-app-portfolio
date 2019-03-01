import React, {Component} from 'react';
import '../css/fonts/fontawesome-free/css/all.css';

export default class Footer extends Component{
  render(){
    return(
        <footer className="footer text-center mt-5 popTop">
          <div className="container popTop">
            <ul className="list-inline mb-5 popTop">
              <li className="list-inline-item popTop">
                <a className="social-link rounded-circle text-white mr-3 popTop" href="mailto:logan.r.hein@gmail.com">
                  <i className="fas fa-envelope popTop"></i>
                </a>
              </li>
            </ul>
            <p className="text-muted small mb-0">Copyright &copy; Logan Hein 2019</p>
          </div>
        </footer>
      )
    }
}
