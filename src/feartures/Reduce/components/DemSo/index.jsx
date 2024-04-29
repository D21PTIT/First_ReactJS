import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

Demso.propTypes = {

};
const init = 0;
const Up_action = 'up';
const Down_action = 'down';

const reducer = (state, action) => {
    switch (action) {
        case Up_action: return state + 1;
        case Down_action: return state - 1;
        default:
    }
}

function Demso(props) {
    const [count, dispatch] = useReducer(reducer, init);
    return (
        <div>
            <p style={{ fontSize: 60 }}> {count}</p>
            <button onClick={() => {
                dispatch(Up_action);
            }}>
                Up
            </button>
            <button onClick={() => {
                dispatch(Down_action);
            }}>
                Down
            </button>
        </div>
    );
}

export default Demso;