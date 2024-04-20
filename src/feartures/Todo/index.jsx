import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

Fearture.propTypes = {

};

function Fearture(props) {
    const arr = [
        {
            id: 1,
            name: 'sleep',
            status: 'new',
        },
        {
            id: 2,
            name: 'code',
            status: 'ok',
        },
        {
            id: 3,
            name: 'eat',
            status: 'ok'
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