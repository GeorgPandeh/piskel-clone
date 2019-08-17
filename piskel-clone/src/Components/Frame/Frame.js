import React, { Component } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

class Frame extends Component {
  constructor() {
    super();
    this.size = 4;
  }

  generateRect = (item, i) => {
    const arrayOfColors = this.props.getRects.children;
    if (arrayOfColors) {
      return (
        <Rect
          x={item.x * this.size}
          y={item.y * this.size}
          width={this.size}
          height={this.size}
          fill={arrayOfColors[i].attrs.fill}
          key={i}
        />
      )
    }
  }

  render() {
    const { field } = this.props;
    if (this.props.size) {
      this.size = this.props.size;
    }

    const { x } = this.props;
    const size = this.size * 32;
    return (
      <div>
        <Stage width={size + x} height={size} x={x}>
          <Layer>
            {field.map(this.generateRect)}
          </Layer>
        </Stage>
      </div>
    )
  }
}

export default Frame;