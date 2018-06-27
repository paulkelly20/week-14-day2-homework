import React from 'react';
import BookList from '../components/BookList';
import './ChartBox.css'



export default class BookBox extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      books: []
    }
  }
    componentDidMount() {
      const url = 'https://rss.itunes.apple.com/api/v1/gb/books/top-free/all/25/explicit.json'
      // fetch(url).then(res => res.json()).then(songs => this.setState({songs: songs}))
      const request = new XMLHttpRequest()
      request.open("GET", url);
      request.addEventListener('load', () => {
        if(request.status !== 200) return;
        const itunesResponse = JSON.parse(request.response);
        const books = itunesResponse.feed.results;

        this.setState({books: books})
        console.log(books);

      })
      request.send()
    }

  render(){

  return (
    <div>

      <h1 className="title">Top Twenty Books</h1>

      <BookList books={this.state.books}/>
    </div>

    )

  }
}
