import React, { useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import Demso from './components/DemSo';
import ToDoList from './components/TodoList';

Reducer.propTypes = {

};

function Reducer(props) {
    const [abc, setAbc] = useState(0);
    return (
        <div>
            <h2>UseState in Hook</h2>
            <button onClick={() => {
                setAbc(0);
            }
            }
                style={0 === abc ? { backgroundColor: '#500', color: '#fff' } : {}}
            >
                DemSo_UseState
            </button>
            <button onClick={() => {
                setAbc(1);
            }}
                style={1 === abc ? { backgroundColor: '#500', color: '#fff' } : {}}
            >
                ToDoList
            </button>
            {abc === 0 ? <Demso /> : <ToDoList />}
        </div>
    );
}

export default Reducer;