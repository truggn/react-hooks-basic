import { useEffect, useRef, useState } from 'react';


function ranDomColor(currentColor) {

    const listColor = ['red', 'green', 'yellow'];

    let currentIndex = listColor.indexOf(currentColor)

    let newIndex = currentIndex
    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * 3);
    }

    return listColor[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');

    const colorRef = useRef('transparent')

    // Change color every one second
    useEffect(() => {
        const colorInterVal = setInterval(() => {
            // change color
            const newColor = ranDomColor(colorRef.current);
            setColor(newColor)
            colorRef.current = newColor
        }, 1000)
        return () => {
            clearInterval(colorInterVal)
        }
    }, []);

    return color;
}

export default useMagicColor;