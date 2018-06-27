import React, { Component } from 'react';
import './App.css';
import ChartBox from './containers/ChartBox'
import BookBox from './containers/BookBox'
import NavBar from './components/NavBar'
import MovieBox from './containers/MovieBox'
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Route exact path="/chart" component={ChartBox}/>
          <Route exact path="/books" component={BookBox}/>
          <Route exact path="/movies" component={MovieBox}/>
        </div>
      </Router>
    );
  }
}

export default App;
