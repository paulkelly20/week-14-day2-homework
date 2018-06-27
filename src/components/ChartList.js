import React from 'react';
import './ChartList.css'




class ChartList extends React.Component {

  render(){
    const chartSongs = this.props.songs.map((song, index) =>(

    <li key = {index}><img src={song['im:image'][2]['label']} alt=""/><h3>{index + 1}.
      {song["title"]['label']}</h3><audio controls>
        <source src={song['link'][1]['attributes']['href']} type="audio/mpeg"/>
      </audio></li>))

    return(
      <div>
      <ul className='chart'>
      {chartSongs}
    </ul>
    </div>
  )}
}

export default ChartList;
