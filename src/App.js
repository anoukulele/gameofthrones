import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

class App extends Component {
    constructor () {
        super();
        this.state = {
            episodes: [], starting_index: 0, i: 0, j: 1, k: 2
    }
    }
    state = {name: '', number: 0, summary: 0, image: 'img.original'}

async componentDidMount () {
    const link = await fetch ('http://api.tvmaze.com/singlesearch/shows?q=game-of-thrones&embed=episodes'); 
    const data = await link.json();
    console.log(data._embedded.episodes);
    this.setState ({episodes: data._embedded.episodes});
}

  render() {
      let content = null; 
      if (this.state.episodes.length === 0) {
          return null;
  }
      
      
    return (
      <div className="App">
        <div className="App-header">
         // <img src={logo} className="App-logo" alt="logo" />
          <h2>Game of Thrones</h2>
        </div>
        <Card episode = {this.state.episodes[this.state.i]}/>
        <Card episode = {this.state.episodes[this.state.j]}/>
        <Card episode = {this.state.episodes[this.state.k]}/>
        
        //<p className="App-intro">
          //To get started, edit <code>src/App.js</code> and save to reload.
        //</p>
      </div>
    );
  }
}

export default App;
