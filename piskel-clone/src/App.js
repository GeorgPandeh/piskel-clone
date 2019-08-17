import React from 'react';
import Canvas from './Components/Canvas/Canvas';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        <Canvas />
      </div>
    );
  }
}

export default App;
