import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AvtChange from './components/AvtChange';
import FakeChat from './components/FakeChat';

Effect.propTypes = {

};

function Effect(props) {
    const arr = ['AvtChange', 'FakeChat'];
    const [abc, setAbc] = useState('AvtChange');
    const xuly = () => {
        if (abc === 'AvtChange') {
            return <AvtChange></AvtChange>
        }
        else {
            return <FakeChat></FakeChat>
        }
    }
    return (
        <div>
            <h2> Demo San Pham ve Use_Effect</h2>
            {arr.map((it) => (
                <button
                    onClick={() => setAbc(it)
                    }
                    style={it === abc ? { backgroundColor: '#500', color: '#fff' } : {}}
                >{it}</button>
            ))}
            {xuly()}
        </div>
    );
}

export default Effect;