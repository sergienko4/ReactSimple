// Create a new component. This component should produce some HTML
import React from 'react'; 
import ReactDOM  from 'react-dom';

const App = () => {
  return <div> Hi There! </div>;
}


// Take this component's generate HTML and put it on the page ( in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));