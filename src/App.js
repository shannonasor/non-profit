import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import example from './example.jpg'

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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet diam at sem 
              ultricies finibus ut in libero. Nullam viverra rhoncus tincidunt. Curabitur in viverra orci, 
              non dignissim lacus. In aliquam in arcu a molestie. Sed purus ipsum, imperdiet eu nunc a, 
              ultricies maximus risus. Aenean elementum pellentesque hendrerit. Maecenas tortor quam, 
              finibus eu diam sit amet, elementum feugiat lorem. In tristique a urna sit amet efficitur. 
              Etiam ultrices arcu eu dolor hendrerit, sed pharetra libero gravida. Ut id tempus massa. 
              Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</p>
          </div>

          <div className='front-two'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet diam at sem 
                ultricies finibus ut in libero. Nullam viverra rhoncus tincidunt. Curabitur in viverra orci, 
                non dignissim lacus. In aliquam in arcu a molestie. Sed purus ipsum, imperdiet eu nunc a, 
                ultricies maximus risus. Aenean elementum pellentesque hendrerit. Maecenas tortor quam, 
                finibus eu diam sit amet, elementum feugiat lorem. In tristique a urna sit amet efficitur. 
                Etiam ultrices arcu eu dolor hendrerit, sed pharetra libero gravida. Ut id tempus massa. 
                Etiam ultrices sit amet nunc a consequat. Nullam a orci venenatis, accumsan erat vitae, posuere libero.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
