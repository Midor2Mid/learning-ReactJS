import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Truy cập <code>src/App.js</code> chỉnh sửa và lưu lại.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chào mừng đến khóa học ReactJS
          </a>
        </header>
      </div>
    );
  }
}

export default App;
