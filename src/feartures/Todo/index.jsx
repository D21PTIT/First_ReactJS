import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

Fearture.propTypes = {

};

function Fearture(props) {
    const arr = [
        {
            id: 1,
            name: 'sleep'
        },
        {
            id: 2,
            name: 'code'
        },
        {
            id: 3,
            name: 'eat'
        },
    ]
    return (
        <div>
            <h3>TodoList</h3>
            <TodoList todoList={arr}></TodoList>
        </div>
    );
}

export default Fearture;