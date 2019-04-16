import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/b84c6b10-a0fb-4775-b45d-868353aa4386-profile_image-300x300.png" alt="Rồng Vàng"/>
                    <div className="caption">
                        <h3>Cloud9</h3>
                        <p>
                            Dendi
                        </p>
                        {/* <p>
                            <a href="/" className="btn btn-primary">Owning Mid</a>
                            <a href="/" className="btn btn-default">Kick</a>
                        </p> */}
                    </div>
                    <button type="button" className="btn btn-Owning">Owning Mid</button>
                </div>
            </div>
        );
    }
}

export default Product;
