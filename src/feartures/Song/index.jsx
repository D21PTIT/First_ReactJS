import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Song.propTypes = {

};
const arr = [
    {
        id: 1,
        name: 'Cu chill thoi ',
        photo: "https://i.scdn.co/image/ab67616d0000b27336553f37510f4d4f3ccde8bf"
    },
    {
        id: 2,
        name: 'Cu tho di',
        photo: "https://i.scdn.co/image/ab67616d0000b2739635643bb0ecf34a506d50b9"
    },
    {
        id: 3,
        name: 'minh yeu nhau di',
        photo: 'https://i.scdn.co/image/ab67616d00001e02faf6132984fea97ee596edd5'
    },
    {
        id: 4,
        name: 'Gui cho anh',
        photo: 'https://i.scdn.co/image/ab67616d00001e0272ad3f9e63c4a1c093fe2a54'
    },
]

function Song(props) {
    return (
        <div>
            <h2>Nhung bai hat ma ban yeu thich</h2>
            <AlbumList albumList={arr} />
        </div>
    );
}

export default Song;