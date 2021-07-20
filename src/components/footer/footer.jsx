import React from 'react';
import './footer.css';
import {Facebook,Instagram,Telegram,Twitter,LinkedIn} from '@material-ui/icons';

const Footer = () => {
    return (
        <div className="footer__container">
          <div className="footer__info">
          <h3>| Artist || developer | <span>jagan pager</span> </h3>
            <p>pager &copy; 2021</p>
          </div>
          <div className="footer__icons">
            <a href="https://www.instagram.com/_p_a_g_e_r/" target="_blank"><Instagram /></a>
            <a href="https://twitter.com/jagan_150"  target="_blank"><Twitter /></a>
            <a href="https://t.me/pager1504"  target="_blank"><Telegram /></a>
            <a href="https://www.facebook.com/jagan.pager" target="_blank"><Facebook /></a>
            <a href="https://linkedin.com/in/sudhakar-kumar-495900207" target="_blank">
                <LinkedIn />
            </a>
                    
          </div>
        </div>
    )
}

export default Footer
