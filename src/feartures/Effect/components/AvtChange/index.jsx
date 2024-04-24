import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

AvtChange.propTypes = {

};

function AvtChange(props) {
    const [avt, setAvt] = useState()
    useEffect(() => {
        return () => {
            avt && URL.revokeObjectURL(avt.preview)
        }
    }, [avt])
    const handle = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file)
        setAvt(file)
    }
    return (
        <div>
            <h3>Chon File Anh va thay doi hinh nen</h3>
            <input
                type='file'
                onChange={handle}
            ></input>
            {avt && (
                <img src={avt.preview} ></img>
            )
            }
        </div >
    );
}

export default AvtChange;