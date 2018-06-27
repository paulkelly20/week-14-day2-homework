import React from 'react';
import './ChartList.css'




export default class BookList extends React.Component {

  render(){
    const chartBooks = this.props.books.map((book, index) =>(

    <li key = {index}><img src={book["artworkUrl100"]} alt=""/><h3>{index + 1}.
      {book["artistName"]} - {book['name']}</h3>
      </li>))

    return(
      <div>
      <ul className='chart'>
      {chartBooks}
    </ul>
    </div>
  )}
}
