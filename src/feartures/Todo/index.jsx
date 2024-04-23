import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';

Fearture.propTypes = {

};

function Fearture(props) {
    const arr = ['100gem', 'Book_of_Hero', '200_Clan-Medal'];
    const [gift, setGift] = useState();
    return (
        <div>
            {arr.map((it) => (
                <label>
                    <input
                        type='radio'
                        value={it}
                        checked={gift === it}
                        onChange={() => { setGift(it) }}
                    />
                    {it}
                </label>
            ))}
            <button onClick={() => {
                alert(gift);
            }}>
                Claim
            </button>
        </div>
    )
}

export default Fearture;