import React from 'react';
import './App.css';
import Main from './Main'
import store  from './redux/store'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from 'react-redux'


const App = () => (
  <Provider store={store}>
    <Router>
      <Main />
    </Router>
  </Provider>
)

export default App;
