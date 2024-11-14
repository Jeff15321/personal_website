import React from "react";

interface WindowProps {
    size: number;
    height: number;
    x: number;
    y: number;
}

export default function Window({x, y, size, height}: WindowProps) {
    const [isVisible, setIsVisible] = React.useState(true);
    const [windowSize, setWindowSize] = React.useState(size);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleIncreaseSize = () => {
        if (windowSize == 1.4) {
            setWindowSize(1);
        } else {
            setWindowSize(1.4);
        }
    }
    return (
        <div className="window-container" style={{
            visibility: isVisible ? 'visible' : 'hidden',
            height: `${windowSize * 17}vw`,
            width: `${height == 0 ? windowSize * 15 : windowSize * 17 * height}vw`,
            top: `${50 + y}vh`, 
            left: `${50 + x}vw`}}>
            <div className="title-button-container">    
                <button className="title-button" onClick={handleClose} style={{fontSize: `${windowSize * 0.9}em`}}>-</button>
                <button className="title-button" onClick={handleIncreaseSize} style={{fontSize: `${windowSize * 0.9}em`}}>o</button>
                <button className="title-button close-button" onClick={handleClose} style={{fontSize: `${windowSize * 0.9}em`}}>x</button>
            </div>
            <div className="index-image-container">

            </div>

        </div>
    )
}
