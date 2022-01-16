
import React from 'react';

const Menu = (props) => {
    return (
        <div className='menu'>
        <div>Please choose color of the board!</div>
        <button onClick={()=>props.colorHandler("blue")} >blue</button>
        <button onClick={()=>props.colorHandler("black")}>brown</button>
        <div>The winner is the player who first gets 5 points!</div>
        </div>
    );
};

export default Menu;