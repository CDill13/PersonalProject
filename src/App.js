import React, { Component } from 'react';
import './App.css';
import routes from "./routes";
import Nav from "./components/nav/Nav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="top-bar">
          <Nav/>
          <p>
              GBBG
          </p>
          <a>
            "search"
          </a>
        </div>
        <div>
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
