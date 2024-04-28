import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

Song.propTypes = {

};
const arr = [
    {
        id: 1,
        name: 'Cu chill thoi ',
        photo: "https://i.scdn.co/image/ab67616d0000b27336553f37510f4d4f3ccde8bf",
        spotyfi: 'https://open.spotify.com/track/014DA3BdnmD3kI5pBogH7c',
        youtube: 'https://www.youtube.com/watch?v=LZN4I3K8SC0&ab_channel=Chillies'
    },
    {
        id: 2,
        name: 'Cu tho di',
        photo: "https://i.scdn.co/image/ab67616d0000b2739635643bb0ecf34a506d50b9",
        spotyfi: 'https://open.spotify.com/track/1SlUGdFlL8KssF9yglckks',
        youtube: 'https://www.youtube.com/watch?v=fs1EKcWoFto&ab_channel=%C4%90%E1%BB%A8CPH%C3%9ACOFFICIAL'
    },
    {
        id: 3,
        name: 'minh yeu nhau di',
        photo: 'https://i.scdn.co/image/ab67616d00001e02faf6132984fea97ee596edd5',
        spotyfi: 'https://open.spotify.com/track/6ig8ZSddxkiiRWTli2SLPl',
        youtube: 'https://www.youtube.com/results?search_query=m%C3%ACnh+y%C3%AAu+nhau+%C4%91i'
    },
    {
        id: 4,
        name: 'Gui cho anh',
        photo: 'https://i.scdn.co/image/ab67616d00001e0272ad3f9e63c4a1c093fe2a54',
        spotyfi: 'https://open.spotify.com/track/4irZhaLCvFOxpY6okHVkHm',
        youtube: 'https://www.youtube.com/watch?v=22fB5nrJqnk&ab_channel=KhoiMy-Topic'
    },
]

function Song(props) {
    const [song, setSong] = useState()
    const redirectToUrl = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div>
            <h2>Nhung bai hat ma ban yeu thich</h2>
            <div style={{ display: 'flex' }}>
                {arr.map((it) => (
                    <div style={{ margin: 30 }}
                        onClick={() => {
                            setSong(it)
                        }}
                    >
                        <img src={it.photo}></img>
                        <p>{it.name}</p>
                    </div>
                ))}
            </div>
            {song &&
                <div style={{ backgroundColor: 'greenyellow' }}>
                    <p>Đây là bài hát: {song.name}</p>
                    <p>Bạn có thể nghe bài hát này tại: </p>
                    <button onClick={() => redirectToUrl(song.youtube)}>Youtube</button>
                    <button onClick={() => redirectToUrl(song.spotyfi)}>Spotify</button>
                </div>
            }

        </div>
    );
}

export default Song;