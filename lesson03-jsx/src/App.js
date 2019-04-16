import React, { Component } from 'react';
import './App.css';

class App extends Component {

    showInfoProduct(product){
        if(product.status){
            return  <h3>
                        ID: {product.id}<br />
                        Name: {product.name}<br />
                        Type: {product.type}<br />
                        Status: {product.status ? 'Active' : 'Pending'}
                    </h3>
        }
    }
    render() {
        var a = 6;
        var name = 'Son Tran';
        var b = 12;
        var product = {
            id: 1,
            name: 'Tide Hunter',
            type: 'Strength',
            status: true
        }
        return (
            // React.createElement('span',{className:'label label-danger', id:''}, 'App Component');
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="/">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Link</a>
                        </li>
                    </ul>
                </nav>
                <div className="ml-30">
                    <h2>
                        a: {a} <br />
                        b: {b} <br />
                        a + b: {a + b} <br />
                    </h2>
                    <h3>
                        name: {name}
                    </h3>
                    {this.showInfoProduct(product)}
                </div>
            </div>
        );
    }
}

export default App;
