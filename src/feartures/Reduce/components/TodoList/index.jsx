import React, { useState } from 'react';
import PropTypes from 'prop-types';

ToDoList.propTypes = {

};

function ToDoList(props) {
    const [action, setAction] = useState('');
    const [cv, setCV] = useState([]);
    const Xuly = () => {
        setCV(prevCV => [...prevCV, action]);
        // Clear the input field after adding
        setAction('');
    }
    const Handle = (index) => {
        setCV(prevCV => prevCV.filter((_, i) => i !== index));
    }
    return (
        <div>
            <h2>Ung Dung TodoList don gian</h2>
            <input
                type='text'
                value={action}
                onChange={e => setAction(e.target.value)}
            >
            </input>
            <button onClick={Xuly}>
                Add
            </button>
            <ul>
                {cv.map((it, index) => (
                    <div>
                        <li key={index}>{it}</li>
                        <button onClick={() => Handle(index)}>Completed</button>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;