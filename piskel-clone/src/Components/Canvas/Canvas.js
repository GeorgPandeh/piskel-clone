import React, { Component } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

import Preview from '../Preview/Preview';
import FramesList from '../Frame/FramesList';
import './canvas.css';

class Canvas extends Component {
  constructor() {
    super();
    this.state = {
      canvasFrame: [],
      history: [],
    }
    this.color = 'black';
    this.layer = React.createRef();
    this.isBucketOn = false;
    this.fieldBuffer = [];
  }

  generateRect = (item, id) => {
    return (
      <Rect
        x={item.x * 15}
        y={item.y * 15}
        stroke='black'
        strokeWidth={0.3}
        width={15}
        height={15}
        fill='#464646'
        key={id}
      />
    )
  }

  changeColor = (e) => {
    this.isBucketOn = false;
    if (e.target.innerHTML === "Primary color") {
      e.target.innerHTML = "Secondary color";
      this.color = 'black';
    } else {
      e.target.innerHTML = "Primary color";
      this.color = 'white';
    }
  }

  canvasMouseEvent = (e) => {
    if (e.evt.buttons === 1) {
      if (this.isBucketOn) {
        const targetColor = e.target.attrs.fill
        this.layer.current.children.forEach(item => {
          if (item.attrs.fill === targetColor) {
            item.attrs.fill = this.color;
          }
        });

        this.layer.current.draw();
      } else {
        e.target.attrs.fill = this.color;
        e.target.draw();
      }
    }

    const removeDiv = document.getElementsByClassName('coordinates')[0];
    if (removeDiv) {
      document.body.removeChild(removeDiv);
    }

    const x = this.fieldBuffer[e.target.index].x;
    const y = this.fieldBuffer[e.target.index].y;
    const div = document.createElement('div');
    div.className = 'coordinates';
    div.appendChild(document.createTextNode(`x: ${x}; y: ${y}`));
    document.body.appendChild(div);
  }

  createFrame = () => {
    this.setState(state => {
      const canvas = JSON.parse(JSON.parse(JSON.stringify(this.layer.current)));
      console.log(canvas);
      return {
        canvasFrame: canvas,
        history: [...state.history, { canvasFrame: canvas }],
      }
    });
  }

  bucket = () => {
    if (!this.isBucketOn) {
      this.isBucketOn = true;
    } else this.isBucketOn = false;
  }

  clear = () => {
    this.isBucketOn = false;
    this.layer.current.children.map(item => item.attrs.fill = '#464646');
    this.layer.current.draw();
  }

  eraser = () => {
    this.isBucketOn = false;
    this.color = '#464646';
  }

  render() {
    const field = [];
    for (let y = 0; y <= 31; y++) {
      for (let x = 0; x <= 31; x++) {
        field.push({ x, y });
        this.fieldBuffer.push({ x, y });
      }
    }

    return (
      <div>
        <Stage className="canvas" width={480} height={480} onMouseDown={this.canvasMouseEvent} onMouseOver={this.canvasMouseEvent}>
          <Layer ref={this.layer}>
            {
              field.map(this.generateRect)
            }
          </Layer>
        </Stage>
        <div className="new-frame_change-color_buttons">
          <button onClick={this.createFrame}>Create Frame</button>
          <button onClick={this.changeColor}>Change Color</button>
          <button onClick={this.bucket}>Bucket</button>
          <button onClick={this.clear}>Clear</button>
          <button onClick={this.eraser}>Eraser</button>
        </div>
        <FramesList field={field} history={this.state.history} />
        <div className='preview-block'>
          <Preview field={field} history={this.state.history} />
        </div>
      </div>
    )
  }
}

export default Canvas;