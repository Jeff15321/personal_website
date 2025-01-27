import React, { useEffect } from "react";

interface PhotoWindowProps {
    id: string;
    photoPath: string;
    size: number;
    height: number;
    x: number;
    y: number;
    z: number;
    backgroundColor: string;
    buttonColor: string;
}

export default function PhotoWindow({id, photoPath,size, height, x, y, z, backgroundColor, buttonColor}: PhotoWindowProps) {
    const [windowSize, setWindowSize] = React.useState(size);
    const [originalSize, setOriginalSize] = React.useState(size);
    const [windowHeight, setWindowHeight] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [position, setPosition] = React.useState({ x, y });

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    }, []);

    const handleClose = () => {
        const windowElement = document.querySelector(`.outer-window-container-${id}`) as HTMLElement | null;
        if (windowElement) {
            const styleElement = windowElement.querySelector(`.window-style-${id}`) as HTMLElement | null;
            if (styleElement) {
                styleElement.style.visibility = 'hidden';
                styleElement.animate(
                    [
                        { opacity: 1 },
                        { opacity: 0, visibility: 'hidden' }
                    ],
                    {
                        duration: 500,
                        fill: 'forwards',
                        easing: 'ease-in-out'
                    }
                );
            }
        }
    };

    const handleIncreaseSize = () => {
        if (windowSize == 1.4 * originalSize) {
            setWindowSize(originalSize);
        } else {
            setWindowSize(1.4 * originalSize);
        }
    }

    useEffect(() => {
        const popupLetter = document.querySelector(`.window-container.window-style-${id}`) as HTMLElement | null;
        const interval = setInterval(() => {
            if (popupLetter) {
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
                const backgroundElement = document.querySelector(`.window-style-${id}`) as HTMLElement | null;
                if (backgroundElement) {
                    backgroundElement.style.backgroundColor = `#${randomColor}`;
                    backgroundElement.style.transition = 'background-color 0.5s ease';
                    backgroundElement.style.border = `2px solid #${randomColor2}`;
                }
            }
        }, 750);
        return () => clearInterval(interval);
    }, []);

    const handleMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;
        const startY = e.clientY;
        const initialX = position.x;
        const initialY = position.y;

        const handleMouseMove = (e: MouseEvent) => {
            const newX = initialX + (e.clientX - startX) / windowWidth * 100;
            const newY = initialY + (e.clientY - startY) / windowHeight * 100;
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
        <div className={`outer-window-container-${id}`}>
            <div className={`window-container window-style-${id} rotate-${id}`} style={{
                height: `${windowSize * 17}vw`,
                width: `${height == 0 ? windowSize * 15 : windowSize * 17 * height}vw`,
                top: `${(50 + position.y)}vh`,
                left: `${(50 + position.x)}vw`,
                backgroundColor: backgroundColor,
                visibility: 'hidden',
                zIndex: z,
                userSelect: 'none'
            }}>
            <div className="title-button-container" onMouseDown={handleMouseDown}>
                <button className="title-button" onClick={handleClose} style={{
                    fontSize: `${windowSize * 0.9}em`,
                    color: buttonColor,
                    userSelect: 'none'
                    }}>-</button>
                <button className="title-button" onClick={handleIncreaseSize} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor, userSelect: 'none'}}>o</button>
                <button className="title-button close-button" onClick={handleClose} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor, userSelect: 'none'}}>x</button>
            </div>
            <div className="index-image-container" style={{
                position: 'absolute',
                height: '90%',
                top: 'auto', 
                bottom: '0',
                left: '0',
                right: '0',
                overflow: 'hidden',
                pointerEvents: 'none'
            }}>
                <img src={photoPath} style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'contain',
                    userSelect: 'none',
                    pointerEvents: 'none'
                    }}      
                    draggable="false" 
                />
            </div>
        </div>
      </div>
    )
}
