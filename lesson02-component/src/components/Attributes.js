import React, { Component } from 'react';
// import Header from './components/Header'
import Heroes from './Heroes'

class Attributes extends Component {
    render() {
        return (
            <div>
                <ul>
                <img src="https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4kvah9.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fkvah9_nhtlwlkphx2f4x2f4hx2fZaylunao_haaypibal_zftivs.wunx3fclyzpvux3d9lh1l115m571j68lkj2ki8l79k6041k2x26p87j.thyrx3dpthnl_$/$/$/$/$" alt="Strength"/>
                <button type="button" className="btn btn-Strength">Strength</button>
                <img src="https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4kvah9.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fkvah9_nhtlwlkphx2f9x2f9kx2fHnpspaf_haaypibal_zftivs.wunx3fclyzpvux3d5klhimk2k8597i7km6jhl6lj00l3344mx26p87j.thyrx3dpthnl_$/$/$/$/$" alt="Agility"/>
                <button type="button" className="btn btn-Agility">Agility</button>
                <img src="https://c-4tvylwolbz88x24nhtlwlkphx2ejbyzljkux2ejvt.g00.gamepedia.com/g00/3_c-4kvah9.nhtlwlkph.jvt_/c-4TVYLWOLBZ88x24oaawzx3ax2fx2fnhtlwlkph.jbyzljku.jvtx2fkvah9_nhtlwlkphx2f2x2f23x2fPualsspnlujl_haaypibal_zftivs.wunx3fclyzpvux3d8h2hjkhl4h26031ihm8532h11h8m2j5ix26p87j.thyrx3dpthnl_$/$/$/$/$" alt="Intelligence"/>
                <button type="button" className="btn btn-Intelligence">Intelligence</button>
                </ul>
                <div>
                <div className="row">
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Heroes />
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Heroes />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attributes;
