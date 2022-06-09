import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import example from './example.jpg'

import Section2 from './secondsection/Section2';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <h1 className='Org-Name'>Big D's House</h1>
        <div className='Menu'>
            <ul className='Main-Menu'>
              <li>Home</li>
              <li>Resources</li>
              <li>News  Events</li>
              <li>Donate</li>
              <li>Orders</li>
            </ul>

            <ul className='Social-Menu'>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
        </div>
      </header>


      <div className='container'>
        <div className='front'>
          <div className='front-one'>
            <img className= 'top-img' src={example} alt="world" />
            <h3 className='h3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <h4 className='h4'> Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h4>
            <button class="button-1">Learn More</button>
          </div>

          <div className='front-two'>
            <ul className='Info-Menu'>
                <li>
                  <h3>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h3>
                  <h4>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h4>
                </li>
                <li>
                  <h3>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h3>
                  <h4>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h4>
                </li>
                <li>
                  <h3>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h3>
                  <h4>Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</h4>
                </li>
              </ul>
          </div>
        </div>
      </div>

      <Section2 />
      <Footer />
    </div>
  );
}


export default App;
