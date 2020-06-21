import React, { useState, useEffect, useRef } from 'react';
function randomColor(currentColor) {
    const COLOR = ["deeppink", "green", "red", "yellow", "black", "blue"];
    let currentIndex = COLOR.indexOf(currentColor)
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * COLOR.length);
    }
    return COLOR[newIndex];
}
function useMagicColor(props) {
    const [color, setColor] = useState("transparent")
    // Save current color
    const colorRef = useRef("transparent")
    //   change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            colorRef.current = newColor;
            setColor(newColor)
            return () => {
                clearInterval(colorInterval)
            }
        }, 1000);
    }, [])
    return { color }
}

export default useMagicColor;