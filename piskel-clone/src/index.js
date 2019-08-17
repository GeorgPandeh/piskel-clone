import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Landing from './Components/Landing/Landing';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/main' component={App} />
    </Switch>
  </BrowserRouter>
), document.getElementById('root'));

serviceWorker.unregister();
