import React, { useState, useEffect } from 'react';

function TodoList(props) {
    const { todoList } = props;
    const [updatedList, setUpdatedList] = useState(todoList);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        filterTodos(filter);
    }, [todoList]);

    const toggleStatus = (id) => {
        const updatedTodoList = updatedList.map(todo => {
            if (todo.id === id) {
                if (todo.status === 'ok') {
                    return { ...todo, status: 'new' };
                } else {
                    return { ...todo, status: 'ok' };
                }
            }
            return todo;
        });
        setUpdatedList(updatedTodoList);
    };

    const filterTodos = (status) => {
        if (status === 'all') {
            setUpdatedList(todoList);
        } else {
            const filteredTodos = todoList.filter(todo => todo.status === status);
            setUpdatedList(filteredTodos);
        }
        setFilter(status);
    };

    return (
        <div>
            <div>
                <button onClick={() => filterTodos('all')}>Show All</button>
                <button onClick={() => filterTodos('ok')}>Show OK</button>
                <button onClick={() => filterTodos('new')}>Show New</button>
            </div>
            <ul>
                {updatedList.map(it => (
                    <li
                        key={it.id}
                        style={{ textDecoration: it.status === 'ok' ? 'line-through' : 'none' }}
                    >
                        {it.name}
                        <button onClick={() => toggleStatus(it.id)}>Toggle Status</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
