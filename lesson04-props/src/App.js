import React, { Component } from 'react';
import './App.css';
import Heroes from './components/Heroes'

class App extends Component {
    render() {
        var heroes = [
            {
                id: 1,
                name: 'Dragon Knigth',
                type: 'Strength',
                image: 'https://gamepedia.cursecdn.com/dota2_gamepedia/5/59/Dragon_Knight_icon.png?version=8f081d5debb0efc6f95282c7a1c52c68',
                status: true
            },
            {
                id: 2,
                name: 'Puck',
                type: 'Intelligence',
                image: 'https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f3x2f35x2fRwem_keqp.rpix3fx78gtukqpx3d29412e9610655dfg2c09e552c73203e3x26k32e.octmx3dkocig_$/$/$/$/$',
                status: true
            },
            {
                id: 3,
                name: 'Viper',
                type: 'Agility',
                image: 'https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f7x2f7hx2fXkrgt_keqp.rpix3fx78gtukqpx3d4c0309gc8969g574215g3g76de4828hhx26k32e.octmx3dkocig_$/$/$/$/$',
                status: true
            },
        ];
        let elements = heroes.map((heroes, index) => {
            let result = '';
            if (heroes.status) {
                result = <Heroes
                    key={heroes.id}
                    type={heroes.type}
                    image={heroes.image}
                >
                    {heroes.name}
                </Heroes>
            }
            return result
        });
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="/">Props</a>

                </nav>
                <div className='container'>

                    <div className="row">

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* <Heroes
                                name='Dragon Knigth'
                                type='Strength'
                                image='https://gamepedia.cursecdn.com/dota2_gamepedia/5/59/Dragon_Knight_icon.png?version=8f081d5debb0efc6f95282c7a1c52c68'
                            />
                            <Heroes
                                name='Puck'
                                type='Intelligence'
                                image='https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f3x2f35x2fRwem_keqp.rpix3fx78gtukqpx3d29412e9610655dfg2c09e552c73203e3x26k32e.octmx3dkocig_$/$/$/$/$'
                            />
                            <Heroes
                                name='Viper'
                                type='Agility'
                                image='https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f7x2f7hx2fXkrgt_keqp.rpix3fx78gtukqpx3d4c0309gc8969g574215g3g76de4828hhx26k32e.octmx3dkocig_$/$/$/$/$'
                            /> */}

                            {/* <Heroes

                                type='Strength'
                                image='https://gamepedia.cursecdn.com/dota2_gamepedia/5/59/Dragon_Knight_icon.png?version=8f081d5debb0efc6f95282c7a1c52c68'
                            >
                                Dragon Knigth
                            </Heroes>
                            <Heroes
                                type='Intelligence'
                                image='https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f3x2f35x2fRwem_keqp.rpix3fx78gtukqpx3d29412e9610655dfg2c09e552c73203e3x26k32e.octmx3dkocig_$/$/$/$/$'
                            >
                                Puck
                                </Heroes>
                            <Heroes
                                type='Agility'
                                image='https://c-8oqtgrjgwu0x24icogrgfkcx2eewtugefpx2eeqo.g00.gamepedia.com/g00/3_c-8fqvc4.icogrgfkc.eqo_/c-8OQTGRJGWU0x24jvvrux3ax2fx2ficogrgfkc.ewtugefp.eqox2ffqvc4_icogrgfkcx2f7x2f7hx2fXkrgt_keqp.rpix3fx78gtukqpx3d4c0309gc8969g574215g3g76de4828hhx26k32e.octmx3dkocig_$/$/$/$/$'
                            >
                                Viper
                                </Heroes> */}
                            {elements}
                        </div>

                    </div>

                </div>
            </div>

        );
    }
}

export default App;