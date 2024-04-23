import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

Fearture.propTypes = {

};

function Fearture(props) {
    const arr = ['100gem', 'Book_of_Hero', '200_Clan-Medal'];
    const [gift, setGift] = useState();
    return (
        <div style={{ padding: '20px' }}>
            <h2> Select a free gift</h2>
            {arr.map((it) => (
                <div>
                    <input
                        type="radio"
                        checked={it === gift}
                        onChange={() => { setGift(it) }}
                    />
                    {it}
                </div>
            ))}
            <button onClick={() => { alert(gift) }}>Claim</button>
        </div>
    )
}

export default Fearture;