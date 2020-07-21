import React, { Component } from 'react';
// you should wrap everything in your app which should be able to use routing with this.
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
    // <BrowserRouter basename="/my-app">
    <BrowserRouter basename="/my-app">
      <div className="App">
        <Blog />
      </div>
    </BrowserRouter>
    // This is now the router off this application and now we can use routing features from that routing package 
    // anywhrere inside this wrapping components, so in any subcomponent which we embed here, this of course includes the blog
    );
  }
}

export default App;
