import React from 'react';
import './style.css';

function CoordinateCard (props) {

    return (
        <div className='CoordinateCard'>
            <div className='XCounter'>{props.xco}</div>
            <div className='YCounter'>{props.yco}</div>
        </div>
    )
};

export default CoordinateCard;