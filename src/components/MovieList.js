import React from 'react';
import './ChartList.css'

export default class MovieList extends React.Component {

  render(){
    const chartMovies = this.props.movies.map((film, index) =>(

    <li key = {index}><img src={film["artworkUrl100"]} alt=""/><h3>{index + 1}.
      {film["name"]} Genre: {film['genres'][0]['name']}</h3>
      </li>))

    return(
      <div>
      <ul className='chart'>
      {chartMovies}
    </ul>
    </div>
  )}
}
