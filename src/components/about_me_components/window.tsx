import React, { useEffect } from "react";

interface WindowProps {
    size: number;
    height: number;
    x: number;
    y: number;
    backgroundColor: string;
    buttonColor: string;
}

export default function Window({x, y, size, height, backgroundColor, buttonColor}: WindowProps) {
    const [isVisible, setIsVisible] = React.useState(true);
    const [windowSize, setWindowSize] = React.useState(size);
    const [windowHeight, setWindowHeight] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [position, setPosition] = React.useState({ x, y });

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    }, []);

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

    const handleMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;
        const startY = e.clientY;
        const initialX = position.x;
        const initialY = position.y;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = initialX + (e.clientX - startX);
            const newY = initialY + (e.clientY - startY);
            setPosition({ x: newX, y: newY });
        };

        const handleMouseUp = () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        setPosition({ x, y });
    }, [x, y]);

    return (
        <div className="window-container" style={{
            visibility: isVisible ? 'visible' : 'hidden',
            height: `${windowSize * 17}vw`,
            width: `${height == 0 ? windowSize * 15 : windowSize * 17 * height}vw`,
            top: `${50 + position.y / windowHeight * 100}vh`,
            left: `${50 + position.x / windowWidth * 100}vw`,
            backgroundColor: backgroundColor}}>
            <div className="title-button-container" onMouseDown={handleMouseDown}>
                <button className="title-button" onClick={handleClose} style={{
                    fontSize: `${windowSize * 0.9}em`,
                    color: buttonColor
                    }}>-</button>
                <button className="title-button" onClick={handleIncreaseSize} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor}}>o</button>
                <button className="title-button close-button" onClick={handleClose} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor   }}>x</button>
            </div>
            <div className="index-image-container">

            </div>

        </div>
    )
}
