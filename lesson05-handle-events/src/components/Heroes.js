import React, { Component } from 'react';

class Heroes extends Component {
    render() {
        return (
            <h1>
                
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt={this.props.children} src={this.props.image}/>
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.type}
                            </p>
                            <p>
                                <a href="/" className="btn btn-primary">Pick</a>
                            </p>
                        </div>
                    </div>
                </div>
                
            </h1>
        );
    }
}

export default Heroes;
