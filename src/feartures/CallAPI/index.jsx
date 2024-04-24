import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { CalculationInterpolation } from 'sass';

CallAPI.propTypes = {

};

const arr = ['posts', 'comments', 'albums']

function CallAPI(props) {
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    //chinh su kien cuon trang
    const [cuon, setCuon] = useState(false);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => { setPosts(json) })
    }, [type])
    useEffect(() => {
        const xuly = () => {
            if (window.scrollY >= 200) {
                setCuon(true);
            }
            else {
                setCuon(false);
            }

        }
        window.addEventListener('scroll', xuly);
        return () => {
            window.removeEventListener('scroll', xuly);
        }
    })
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
            {cuon && (<button style={
                {
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }
            }>
                Len dau trang
            </button>)}
        </div>
    );
}

export default
    CallAPI;