import React from 'react';
import '../Styles/Coral.css';
import poza from "../Assets/logo bun-fotor-bg-remover-20231130185051.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import telefon from "../Assets/telefon.png";
const FacebookClick = () => {
  window.open('https://www.example.com', '_blank');
};
const InstagramClick = () => {
  window.open('https://www.example.com', '_blank');
};
const LinkedInClick = () => {
  window.open('https://www.example.com', '_blank');
};
function Coral() {
  return (
    <div className='containerCoral'>
      <div className='HeaderCoral'>
        <div className='LogoContainer'>
          <img src={poza} alt="Logo" />
          <span className='span'>Coral</span>
        </div>
      </div>
      <div className='paginaPrezentare'>
          <div>
            <br></br>
            <h>Chat Beyond Borders</h>
            <p>With our innovative chat application, communication transcends language barriers! Choose your preferred language and experience seamless conversations as your messages are translated instantly. Whether you're traveling or chatting with friends from around the world, connecting has never been so simple and obstacle-free.</p>
          <h>Global Chat Harmony</h>
          <p>Discover a chat experience without borders with our intelligent app! Select your preferred language and enjoy authentic real-time conversations. With our advanced translation technology, your messages are automatically adapted to be understood by your conversation partners, creating a communication bridge in a globalized world.</p>
         <h>Connect Globally, Speak Locally</h>
         <p>In a connected world, our chat app redefines online communication. Translate messages instantly into the desired language, opening doors to new friends and authentic connections. Every conversation becomes deeper and more meaningful when the language barrier is eliminated. Download the app today and uncover the power of limitless conversations!</p>
        <img src={telefon} style={{position:'relative', bottom:550,width:1070,height:600,left:600}}></img>
         </div>
        </div>
      <div className='footer'>
        <div className='footer-left'>
          <button onClick={FacebookClick}><FontAwesomeIcon icon={['fab', 'facebook']}/> Facebook</button>
          <button onClick={InstagramClick}><FontAwesomeIcon icon={['fab', 'instagram']} /> Instagram</button>
          <button onClick={LinkedInClick}><FontAwesomeIcon icon={['fab', 'linkedin']} /> LinkedIn</button>
        </div>
        <div className='footer-right'>
          <h3 className='titlunews'>JOIN OUR NEWSLETTER</h3>
          <input type='text' placeholder='Enter your email' />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Coral;
