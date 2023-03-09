import React from 'react';
import './Comp.css'
const ButtonPrev = ({ onClick, label }) => {
    return (
        <div onClick={onClick} className='prev-btn'>
            <p>
            {label}
            </p>
        </div>
    );
};

export default ButtonPrev;
