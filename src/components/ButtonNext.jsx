import React from 'react';

const ButtonNext = ({ onClick, label }) => {
    return (
        <div onClick={onClick}>
            <button type='submit' className='next-btn'>
                <p>
                {label}
                </p>
            </button>
        </div>
    );
};

export default ButtonNext;
