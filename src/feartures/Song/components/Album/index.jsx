import React from 'react';
import PropTypes from 'prop-types';
import './style.scss'

Album.propTypes = {

};

function Album(props) {
    const { album } = props;
    return (
        <div onClick={() => {
            alert(album.name + '  Dang duoc phat')
        }} className='album'>
            <div className='a'>
                <img src={album.photo} alt="" />
            </div>

            <p className='b'>{album.name}</p>
        </div>
    );
}

export default Album;