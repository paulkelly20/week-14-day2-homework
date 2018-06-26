import React from 'react';
import ChartList from '../components/ChartList';
import './ChartBox.css'
import {BrowserRouter as Router, Route} from 'react-router-dom';


class ChartBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      songs: []
    }
  }
    componentDidMount() {
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
      // fetch(url).then(res => res.json()).then(songs => this.setState({songs: songs}))
      const request = new XMLHttpRequest()
      request.open("GET", url);
      request.addEventListener('load', () => {
        if(request.status !== 200) return;
        const itunesResponse = JSON.parse(request.response);
        const songs = itunesResponse.feed.entry;

        this.setState({songs: songs})

      })
      request.send()
    }

  render(){

  return (
    <div>
      <h1 className="title">Top Twenty Songs</h1>
      
      <ChartList songs={this.state.songs}/>
    </div>



    )

  }
}

export default ChartBox;
