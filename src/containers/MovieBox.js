import React from 'react';
import MovieList from '../components/MovieList';
import './ChartBox.css'



export default class MovieBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      movies: []
    }
  }
    componentDidMount() {
      const url = 'https://rss.itunes.apple.com/api/v1/gb/movies/top-movies/all/25/explicit.json'
      // fetch(url).then(res => res.json()).then(songs => this.setState({songs: songs}))
      const request = new XMLHttpRequest()
      request.open("GET", url);
      request.addEventListener('load', () => {
        if(request.status !== 200) return;
        const itunesResponse = JSON.parse(request.response);
        const movies = itunesResponse.feed.results;

        this.setState({movies: movies})
        // movies.forEach(movie =>
        //   console.log(movie['genres'][0]))


      })
      request.send()
    }

  render(){

  return (
    <div>

      <h1 className="title">Top Twenty Movies</h1>

      <MovieList movies={this.state.movies}/>
    </div>

    )

  }
}
