import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

Count_Timer.propTypes = {

};

function Count_Timer(props) {
    const [count, setCount] = useState(60);
    let abc = useRef();
    const xuly1 = () => {
        abc.current = setInterval(() => {
            setCount(a => a - 1);
        }, 1000)
    }
    const xuly2 = () => {
        clearInterval(abc.current);
    }
    return (
        <div>
            <h2>Ứng dụng đếm ngược thời gian</h2>
            <p style={{ fontSize: 50 }}>{count}</p>
            <button onClick={xuly1}>Start</button>
            <button onClick={xuly2} >Stop</button>
        </div>
    );
}


export default Count_Timer;