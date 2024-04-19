import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './style.scss'



AlbumList.propTypes = {

};

function AlbumList(props) {
    const { albumList } = props;
    return (
        <ul className='albumList'>
            {albumList.map(it => (
                <li key={it.id}>
                    <Album album={it} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;