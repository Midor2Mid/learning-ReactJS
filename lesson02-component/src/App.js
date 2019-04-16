import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Attributes from './components/Attributes'

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Attributes />
                <div>
                </div>
            </div>

        );
    }
}

export default App;
