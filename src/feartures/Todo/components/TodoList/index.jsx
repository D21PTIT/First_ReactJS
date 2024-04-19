import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
};

function TodoList(props) {
    const { todoList } = props;
    return (
        <ul>
            {todoList.map(it => (
                <li key={it.id}>{it.name}</li>
            ))}
        </ul>
    );
}

export default TodoList;