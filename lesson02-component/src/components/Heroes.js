import React, { Component } from 'react';

class Heroes extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="thumbnail">
                    <img src="https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4kvah9.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fkvah9_nhtlwlkphx2fkx2fk6x2fIlhzathzaly_pjvu.wunx3fclyzpvux3d2hh53ih2iihjh765ml2m6l53iil809m1x26p87j.thyrx3dpthnl_$/$/$/$/$" alt="Rồng Vàng"/>
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

export default Heroes;
