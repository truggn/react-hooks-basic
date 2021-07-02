import React, { useState } from 'react';
import './Colorbox.scss'

ColorBox.propTypes = {

};

function getRandomColor() {
    const color_List = ['deeppink', 'green', 'yellow', 'black', 'red', 'blue']

    const RandomIndex = Math.trunc(Math.random() * 5);
    return color_List[RandomIndex]
}

// khai báo state using hook
function ColorBox() {

    //const initColor = localStorage.getItem('box_color') || 'deeppink'

    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        return initColor
    });

    function handleBoxClick() {
        const newColor = getRandomColor(); // khi click new màu mới và set lại cái state mới
        setColor(newColor);
        localStorage.setItem('box_color', newColor)
    }

    return (
        <div className='color-box'
            style={{ backgroundColor: color }}
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;