import React, { Component } from 'react';

class Heroes extends Component {

    // constructor(props){
    //     super(props);
    //     this.onAddToCart=this.onAddToCart.bind(this);
    // }

    // onAddToCart() {
    //     alert(this.props.children + ' - ' + this.props.type)
    // }
    onAddToCart2 = () => {
        alert(this.props.children + ' - ' + this.props.type)
    }
    render() {
        return (
            <h1>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img alt={this.props.children} src={this.props.image} />
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <p>
                                {this.props.type}
                            </p>
                            <p>
                                {/* <a href="/" className="btn btn-primary" onClick={() => { this.onAddToCart(this.props.children) }}>Pick</a> */}
                                <a href="/" className="btn btn-primary" onClick={ this.onAddToCart2 }>Pick</a> 
                            </p>
                        </div>
                    </div>
                </div>

            </h1>
        );
    }
}

export default Heroes;
