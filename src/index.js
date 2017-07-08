import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// my scripts 
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB9LhgWi9_FEJYvVkcuIDd7BlM6xU4Mi8s';

YTSearch({key: API_KEY, term:'surfboards', function(data){
  console.log('====================================');
  console.log(data);
  console.log('====================================');
}});

// Create a new component. This component should produce some HTML

const App = () => {
    return (
    <div> 
      <SearchBar />
    </div>
    );
};


// Take this component's generate HTML and put it on the page ( in DOM)

ReactDOM.render( <App/> , document.querySelector('.container'));