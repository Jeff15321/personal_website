import React, { useEffect } from "react";

interface LetterWindowProps {
    id: string;
    letter: string;
    size: number;
    height: number;
    x: number;
    y: number;
    z: number;
    backgroundColor: string;
    buttonColor: string;
}

export default function LetterWindow({id, letter, size, height, x, y, z, backgroundColor, buttonColor}: LetterWindowProps) {
    const [windowSize, setWindowSize] = React.useState(size);
    const [windowHeight, setWindowHeight] = React.useState(0);
    const [windowWidth, setWindowWidth] = React.useState(0);
    const [position, setPosition] = React.useState({ x, y });

    useEffect(() => {
        setWindowHeight(window.innerHeight);
        setWindowWidth(window.innerWidth);
    }, []);

    const handleClose = () => {
        const windowElement = document.querySelector(`.window-container.background-color-${id}`) as HTMLElement | null;
        if (windowElement) {
            windowElement.style.visibility = 'hidden';
        }
    };

    const handleIncreaseSize = () => {
        if (windowSize == 1.4) {
            setWindowSize(1);
        } else {
            setWindowSize(1.4);
        }
    }

    useEffect(() => {
        const popupLetter = document.querySelector(`.window-${id}`) as HTMLElement | null;
        const interval = setInterval(() => {
            if (popupLetter) {
                const fancyFonts = ['Impact', 'Comic Sans MS', 'Copperplate', 'Papyrus', 'Brush Script MT', 'Lucida Calligraphy', 'Cursive', 'Arial Unicode MS', 'Courier New', 'Georgia', 'Palatino', 'Garamond', 'Bookman', 'Avant Garde', 'Tahoma', 'Helvetica', 'Geneva', 'Trebuchet MS', 'Rockwell', 'Playfair Display', 'Great Vibes', 'Alex Brush', 'Dancing Script', 'Pacifico', 'Lato', 'Montserrat', 'Merriweather', 'Didot', 'Bodoni MT', 'Futura', 'Century Gothic'];
                const randomIndex = Math.floor(Math.random() * fancyFonts.length);
                popupLetter.style.fontFamily = fancyFonts[randomIndex];
                const randomColor = Math.floor(Math.random() * 16777215).toString(16);
                const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
                const backgroundElement = document.querySelector(`.background-color-${id}`) as HTMLElement | null;
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
        <div className={`window-container background-color-${id}`} style={{
            height: `${windowSize * 17}vw`,
            width: `${height == 0 ? windowSize * 15 : windowSize * 17 * height}vw`,
            top: `${(50 + position.y)}vh`,
            left: `${(50 + position.x)}vw`,
            backgroundColor: backgroundColor,
            visibility: 'hidden',
            zIndex: z
        }}>
            <div className="title-button-container" onMouseDown={handleMouseDown}>
                <button className="title-button" onClick={handleClose} style={{
                    fontSize: `${windowSize * 0.9}em`,
                    color: buttonColor
                    }}>-</button>
                <button className="title-button" onClick={handleIncreaseSize} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor}}>o</button>
                <button className="title-button close-button" onClick={handleClose} style={{fontSize: `${windowSize * 0.9}em`, color: buttonColor   }}>x</button>
            </div>
            <div className="index-image-container">
                <div className={`popup-letter window-${id}`}
                style={{
                    fontSize: `${size * 16 - 1}vw`,
                }}
                >{letter}</div>
            </div>

        </div>
    )
}
