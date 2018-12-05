import React from 'react';
import { Link } from 'gatsby';
import Particles from 'react-particles-js';
import '../assets/styles/vendor/bootstrap.css';
import '../assets/styles/styles.css';
import { FaFacebookF,FaLinkedinIn,FaGithub,FaGlobe } from 'react-icons/fa';
import * as menu_icon from '../assets/icons/menu-button.svg';
import * as arrow_down from '../assets/icons/arrow_down.svg';

class IndexPage extends React.Component{
  constructor(){
    super();

  }

  render(){
    return(
      <div id="fullpage">
        <div className="section hero-content w-100">
          <div className="menu-div pt-4 pl-4">
          </div>
          <Particles
            params={{
              particles: {
                number: {
                  value: 100
                },
                line_linked: {
                  shadow: {
                    enable: false,
                    color: '#000',
                    blur: 0
                  }
                }
              },
              fps_limit: 40
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
          <div className="ml-5">
          </div>
          <div className="hero-div text-center text-white w-100">
            <h3>I AM</h3>
            <h3>Dancan Ngara</h3>
            <p>"The best software developer you<br/> know out there got to where they are by<br/> solving problems they were unqualified for."</p>
          </div>
          <div className="hero-arrow text-center text-white w-100">
            <div className="col-md-12">
              <div className="social-links text-center">
                <span className="social-links"><a href="#"><FaFacebookF /></a></span>
                <span className="social-links"><a href="https://sourcerer.io/ngarawakimani"><FaGlobe /></a></span>
                <span className="social-links"><a href="https://github.com/ngarawakimani" target="blank"><FaGithub /></a></span>
                <span className="social-links"><a href="https://www.linkedin.com/in/dancan-kimani-3b83bb145/" target="blank"><FaLinkedinIn /></a></span>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
