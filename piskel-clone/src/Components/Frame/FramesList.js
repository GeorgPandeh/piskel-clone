import React, { Component } from 'react';

import Frame from './Frame';
import './framelist.css';

class FramesList extends Component {
  constructor() {
    super();
    this.state = {
      history: [],
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.history !== state.history) {
      return {
        history: props.history,
      }
    }

    return null
  }

  raiseFrame = (id) => {
    const { history } = this.state;
    if (history[id - 1]) {
      [history[id], history[id - 1]] = [history[id - 1], history[id]]
      this.forceUpdate();
    }
  }

  dropFrame = (id) => {
    const { history } = this.state;
    if (history[id + 1]) {
      [history[id], history[id + 1]] = [history[id + 1], history[id]]
      this.forceUpdate();
    }
  }

  dublicate = (id) => {
    const { history } = this.state;
    history.splice(id, 0, history[id]);
    this.forceUpdate();
  }

  delete = (id) => {
    const { history } = this.state;
    history.splice(id, 1);
    this.forceUpdate();
  }


  getFrames = ({ canvasFrame }, id) => {
    const { field } = this.props;
    return (
      <div key={id}>
        <div className="frame_change-position_block">
          <div className="frame-element">
            <Frame field={field} getRects={canvasFrame} key={id} x={0} />
          </div>
          <div className="change-position-buttons">
            <button onClick={() => { this.raiseFrame(id) }}>∧</button>
            <button onClick={() => { this.dropFrame(id) }}>∨</button>
          </div>
        </div>
        <button className="delete" onClick={() => { this.delete(id) }}>Delete frame</button>
        <button className="dublicate" onClick={() => { this.dublicate(id) }}>Dublicate frame</button>
      </div>
    )
  }

  render() {
    const { history } = this.state;
    return (
      <div>
        {history.map(this.getFrames)}
      </div>
    )
  }
}

export default FramesList;