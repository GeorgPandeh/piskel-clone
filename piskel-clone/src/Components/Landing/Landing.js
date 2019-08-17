import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

class Landing extends Component {

  render() {
    return (
      <div>
        <div className='header'>piskel clone task</div>
        <div className="start-button">
          <button>
            <Link className="start-link" to='/main'>Start</Link>
          </button>
        </div>
        <ul className="contacts">
          <li>Gmail: <a href="mailto:georgpandeh@gmail.com">georgpandeh@gmail.com</a></li>
          <li>Life: <a href="tel:+375256297342">+375256297342</a></li>
          <li>Telegram: <a href="tg://resolve?domain=@GeorgPandeh">@GeorgPandeh</a></li>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Landing;