import React, { Component } from 'react';
import './App.css';
import ChartBox from './containers/ChartBox'
import NavBar from './components/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <NavBar/> */}
          <Route exact path="/" component={ChartBox}/>
        </div>
      </Router>
    );
  }
}

export default App;
