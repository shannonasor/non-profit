import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHandsHoldingCircle, faHandHoldingDollar, faHouse, faNewspaper, faReceipt, faTableList, faChalkboardUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import example from './example.jpg'


function App() {
  return (
    <div className="App">
      <div className='Top'>
          <div className='Top-Header'>
          <FontAwesomeIcon className='house' icon={faHouse} />
            <h1 className='name'>Big D's House</h1>
          </div>

          <div className='Top-Header-Menu'>
              <ul className= 'Top-Header-Menu-List'>
                <li className='li-one'>Learn More</li>
                <li>Volunteer</li>
                <li className='li-three'>Donate</li>
              </ul>
          </div>
      </div>

      <div className='Second-Top'>
            <div className='second-heading'>
                <h1>#LetItMarinate</h1>
            </div>
              
            <div className='second-menu'>

              <div className='first-second-menu'>
                <ul className= 'first-second-menu-list'>
                  <li className='li-one'>Home</li>
                  <li className='li-one'>News</li>
                    <li className='li-three'>Events</li>
                    <li className='li-one'>Our Services</li>
                  <li>Resources</li>
                  <li className='li-three'>Contact Us</li>
                </ul>
              </div>

              {/* <div className='second-second-menu'>
                <ul className= 'second-second-menu-list'>
                    <li className='li-one'>News</li>
                    <li className='li-three'>Events</li>
                    <li className='li-one'>Our Services</li>
                    
                    
                  </ul>
              </div> */}
            </div>
      </div>
            

            <div className='bottom'>
              
              <div className='right-content'>
              <div className='left-content'>
                <div>
                  <h3>Our Vision</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. </p>
                </div>

                     <div>
                      <h3>Our Plan</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. </p>
                     </div>

                     <div className='buttons'>
                        <button className="button-30" role="button">Join The Cause</button>
                     </div>
              </div>
                  <img className='right-image' src= {example}/>
              </div>
            </div>
          </div>

  );
}


export default App;
