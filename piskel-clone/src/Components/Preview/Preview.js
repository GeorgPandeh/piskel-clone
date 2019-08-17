import React, { Component } from 'react';

import Frame from '../Frame/Frame';
import './preview.css';

class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      count: 0,
    };
    this.size = 4;
    this.x = 0;
    this.fps = 0;
    this.count = 0;
    this.isAnimationOn = false;
    this.timeout = 0;
  }

  fullscreen = () => {
    const preview = document.getElementsByClassName('preview')[0]
    if (preview) {
      preview.style.margin = '0 auto';
      if (!preview.fullscreenElement) {
        preview.requestFullscreen();
      } else if (preview.exitFullscreen) {
        preview.exitFullscreen();
      }

      preview.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
          const width = window.screen.width;
          const height = window.screen.height;
          this.size = height / 32;
          this.x = (width / 2 - this.size * 16);
        } if (!document.fullscreenElement) {
          this.x = 0;
          this.size = 4;
        }
      });
    }
  }

  preview = () => {
    const { field } = this.props;
    if (this.count === this.state.history.length) {
      this.count = 0;
    }

    const history = this.state.history[this.count];
    if (history) {
      this.timeout = setTimeout(() => {
        this.count += 1;
        this.forceUpdate();
      }, 1000 / this.fps);
      return (
        <div className="preview">
          <Frame field={field} getRects={history.canvasFrame} size={this.size} x={this.x} />
        </div>
      )
    }
  }

  componentWillReceiveProps() {
    clearTimeout(this.timeout);
  };

  animation = () => {
    if (!this.isAnimationOn) {
      const history = this.props.history;
      this.setState({ history: history });
      this.isAnimationOn = true;
    } else if (this.isAnimationOn) {
      clearTimeout(this.timeout);
      this.isAnimationOn = false;
    }
  }

  changeFps = (e) => {
    this.fps = e.target.value;
  }

  render() {
    return (
      <div>
        {this.preview()}
        <button className='animation' onClick={this.animation}>Animation</button>
        <button className='full-screen' onClick={this.fullscreen}>Fullscreen</button>
        <input onInput={this.changeFps} className="fps" type="range" step="1" id="start" min="1" max="24" />
        {`FPS = ${this.fps}`}
      </div>
    )
  }
}

export default Preview;