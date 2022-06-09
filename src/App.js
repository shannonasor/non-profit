import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHandHoldingDollar, faHouse, faNewspaper, faReceipt, faTableList } from '@fortawesome/free-solid-svg-icons'
import example from './example.jpg'


function App() {
  return (
    <div className="App">
      <div className='Left'>
          <div className='Left-Main-Heading'>
            <h1>Big D's House</h1>
          </div>
          <div className='Left-Main-Menu'>
            <ul className= 'Left-Main-Menu-Icon-List'>
                <li><FontAwesomeIcon icon={faHouse} /></li>
                <li><FontAwesomeIcon icon={faTableList} /></li>
                <li><FontAwesomeIcon icon={faNewspaper} /></li>
                <li><FontAwesomeIcon icon={faHandHoldingDollar} /></li>
                <li><FontAwesomeIcon icon={faReceipt} /></li>
              </ul>

              <ul className= 'Left-Main-Menu-List'>
                <li>Home</li>
                <li>Resources</li>
                <li>News  Events</li>
                <li>Donate</li>
                <li>Orders</li>
              </ul>
          </div>
          <div className='Left-Social-Menu'>
          <ul className='Left-Social-Menu-List'>
              <li><FontAwesomeIcon icon={faFacebook} /></li>
              <li><FontAwesomeIcon icon={faLinkedinIn} /></li>
              <li><FontAwesomeIcon icon={faInstagram} /></li>
              <li><FontAwesomeIcon icon={faTwitter} /></li>
              <li><FontAwesomeIcon icon={faYoutube} /></li>
            </ul>
            
          </div>
      </div>

      <div className='Right'>
          <div className='Top-Right'>
            <img src={example} alt="world" />
          </div>
          <div>
            
          </div>

      </div>
    </div>
  );
}


export default App;
