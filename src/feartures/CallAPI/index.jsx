import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CalculationInterpolation } from 'sass';

CallAPI.propTypes = {

};

const arr = ['posts', 'comments', 'albums']

function CallAPI(props) {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => { setPosts(json) })
    }, [type])
    return (
        <div>
            <h2>Thuc hanh useEffect de CallAPI</h2>
            {arr.map((it) => (
                <button
                    style={it === type ? { background: '#444', color: '#fff' } : {}}
                    onClick={() => {
                        setType(it);
                    }}
                >{it}</button>

            ))}
            {posts.map((it) => (
                <p>{it.title || it.name}</p>
            ))}
        </div>
    );
}

export default
    CallAPI;