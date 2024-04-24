import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

Count_Timer.propTypes = {

};

function Count_Timer(props) {
    const [count, setCount] = useState(60);
    const [bcs, setBcs] = useState();
    let abc = useRef();
    const xuly1 = () => {
        setBcs(true)
        abc.current = setInterval(() => {
            setCount(a => a - 1);
        }, 1000)
    }
    const xuly2 = () => {
        setBcs(false)
        clearInterval(abc.current);
    }
    return (
        <div>
            <h2>Ứng dụng đếm ngược thời gian</h2>
            <p style={{ fontSize: 50 }}>{count}</p>
            <button onClick={xuly1} style={bcs === true ? { backgroundColor: '#500', color: '#fff' } : {}}>Start</button>
            <button onClick={xuly2} style={bcs === false ? { backgroundColor: '#500', color: '#fff' } : {}}>Stop</button>
        </div>
    );
}


export default Count_Timer;