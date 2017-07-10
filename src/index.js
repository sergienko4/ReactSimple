import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// my scripts section 
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';


// credential   to Tou-Tube
const API_KEY = 'AIzaSyB9LhgWi9_FEJYvVkcuIDd7BlM6xU4Mi8s';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };

    // call to youtube by using AJAX and you-tube API
    // section 2 AJAX Requests with React
    YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
      this.setState({ videos });
      // this.setState ({videos: videos});
    });

  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
};


// Take this component's generate HTML and put it on the page ( in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));