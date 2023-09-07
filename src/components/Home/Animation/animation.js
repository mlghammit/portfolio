import React, { useState, useEffect } from 'react';

const Animation = () => {
    const [text, setText] = useState('Computer Science Student');
    const [color, setColor] = useState('red'); 
    const [index, setIndex] = useState(0);
    const [erasing, setErasing] = useState(false);

    useEffect(() => {
        if (erasing) {
            if (index > 0) {
                setTimeout(() => setIndex(index - 1), 150);
            } else {
                setErasing(false);
                if (text === 'Computer Science Student') {
                    setText("Western University '26");
                    setColor('violet'); 
                } else if (text === "Western University '26") {
                    setText("Front End Specialist");
                    setColor('orange'); 
                } else if (text === 'Front End Specialist') {
                    setText('Government Relations');
                    setColor('green');
                } else if (text === 'Government Relations') {
                    setText('Aspiring Sock Collector ');
                    setColor('purple'); 
                } else {
                    setText('Computer Science Student');
                    setColor('red'); 
                }
            }
        } else {
            if (index < text.length) {
                setTimeout(() => setIndex(index + 1), 75);
            } else {
                setTimeout(() => setErasing(true), 1500);
            }
        }
    }, [index, erasing, text]);

    return (
        <span style={{color: color}}> {/* Applying the color */}
            {text.slice(0, index)}
        </span>
    );
};

export default Animation;
