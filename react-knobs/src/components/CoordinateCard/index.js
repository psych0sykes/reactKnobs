import React from 'react';
import './style.css';

function CoordinateCard (props) {

    return (
        <div className='CoordinateCard'>
            <div className='CoCounter'>X: {props.xco}</div>
            <div className='CoCounter'>Y: {props.yco}</div>
        </div>
    )
};

export default CoordinateCard;