import React, { Component } from 'react';
import './App.css';

class App extends Component {
    render() {
        var a = 6;
        var name = 'Son Tran';
        var b = 12;
        var product ={
            id:1,
            name: 'Tide Hunter',
            type: 'Strength'
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
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="panel panel-default">
                                {/* Default panel contents */}
                                <div className="panel-heading">Panel heading</div>
                                <div className="panel-body">
                                    <p>Text goes here...</p>
                                </div>
                                {/* Table */}
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>Heading 1</th>
                                        </tr>
                                        <tr>
                                            <th>Heading 2</th>
                                        </tr>
                                        <tr>
                                            <th>Heading 3</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Content 1</td>
                                        </tr>
                                        <tr>
                                            <td>Content 2</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>
                        a: {a} <br/>
                        b: {b} <br/>
                        a + b: {a+b} <br/>
                    </h2>
                    <h3>
                        name: {name}
                    </h3>
                    <h3>
                        ID: {product.id}<br/>
                        name: {product.name}<br/>
                        type: {product.type}<br/>
                    </h3>
                </div>
            </div>
        );
    }
}

export default App;
