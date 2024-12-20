import React, { useEffect, useState } from "react";
import LetterWindow from "./LetterWindow";
import PhotoWindow from "./PhotoWindow";
import { useAboutMeHomePageState } from "../../contexts/AboutMeHomePageState";

export default function Test() {
    const { isHomePage, setIsHomePage } = useAboutMeHomePageState();
    const [animationTimer, setAnimationTimer] = useState(
        // [
        // 1, 0.15, 0.15, 0.15, 0.12, 0.12, 0.12, 0.12, //Heyy~~~~
        // 0.65, 0.2, 0.2, //I'm
        // 0.4, //picture of me
        // 0.3, //turtle
        // 1, 0.2, 0.2, 0.2, //Jeff
        // 0.2,  //frog
        // 1.3 //arrow
        // ]
        [
            0, 0, 0, 0, 0, 0, 0, 0, //Heyy~~~~
            0, 0, 0, //I'm
            0, //picture of me
            0, //turtle
            0, 0, 0, 0, //Jeff
            0,  //frog
            0 //arrow
        ]
    );
    useEffect(() => {
        let accumulatedTime = 0;
        for (let i = 0; i < animationTimer.length; i++) {
            accumulatedTime += animationTimer[i];
            setTimeout(() => {
                const popup = document.querySelector(`.window-style-${i + 1}`) as HTMLElement;
                if (popup) {
                    popup.style.visibility = 'visible';
                    popup.style.opacity = '0';
                    popup.animate(
                        [
                            { opacity: 0 },
                            { opacity: 1 }
                        ],
                        {
                            duration: 800,
                            fill: 'forwards',
                            easing: 'ease-in-out'
                        }
                    );
                    
                }
            }, accumulatedTime * 1000);
        }

        window.addEventListener('click', (e) => {
            const frog = document.querySelector('.window-letter-18') as HTMLElement;
            if (frog && e.target === frog) {
                //hide all elements other than the first five letters
                const elementsToFade = document.querySelectorAll('[class*="window-style-"]');
                elementsToFade.forEach(element => {
                    const match = element.className.match(/\d+/);
                    if (!match) return;
                    const id = parseInt(match[0]);
                    if (id >= 6) {
                        (element as HTMLElement).animate(
                            [
                                { opacity: 1 },
                                { opacity: 0, visibility: 'hidden' }
                            ],
                            {
                                duration: 800,
                                fill: 'forwards',
                                easing: 'ease-in-out'
                            }
                        );
                    }
                });

                //make the five id have same position and spacing as the display page
                // Get the first 5 window elements
                const firstFiveWindows = document.querySelectorAll('[class*="window-style-"]');
                firstFiveWindows.forEach((element, index) => {
                    const match = element.className.match(/\d+/);
                    if (!match) return;
                    const id = parseInt(match[0]);
                    if (id <= 5) {
                        (element as HTMLElement).animate(
                            [
                                { 
                                    top: 'calc(50% - 28vmin)',
                                    left: `calc(${index * 44}vmin)`,
                                    transform: 'translateX(0%)',
                                    opacity: 1,
                                    width: '40vmin',
                                    height: '56vmin',
                                }
                            ],
                            {
                                duration: 800,
                                fill: 'forwards',
                                easing: 'ease-in-out'
                            }
                        );
                    }
                });

                const firstFiveLetters = document.querySelectorAll('.window-letter-1, .window-letter-2, .window-letter-3, .window-letter-4, .window-letter-5');
                firstFiveLetters.forEach((letter, index) => {
                    (letter as HTMLElement).animate(
                        {
                            fontSize: 'calc(15vw)'
                        },
                        {
                            duration: 800,
                            fill: 'forwards',
                            easing: 'ease-in-out'
                        }
                    );
                })
                setTimeout(() => {
                    firstFiveWindows.forEach((window, index) => {
                        (window as HTMLElement).animate(
                            [{
                                opacity: 1,
                                filter: 'blur(0px)',
                                transform: 'translate(0%, 0%)'
                            },
                            {
                                opacity: 0,
                                filter: 'blur(5px)',
                                visibility: 'hidden',
                                transform: 'translate(calc(50vw - 20vmin), 0%)'
                            }
                        ],
                            {
                                duration: 1000,
                                fill: 'forwards',
                                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                            }
                        );
                    })
                    const horizontalTrack = document.querySelector('#horizontal-image-track') as HTMLElement;
                    if (horizontalTrack) {
                        const vminToVwRatio = Math.min(window.innerWidth, window.innerHeight) / window.innerWidth;
                        horizontalTrack.dataset.percentage = "0";
                        horizontalTrack.dataset.mouseDownAt = "0";
                        horizontalTrack.dataset.prevPercentage = "0";

                        horizontalTrack.animate(
                            [
                                { opacity: 0, transform: 'translate(0%, -50%)' },
                                { opacity: 1, transform: 'translate(calc(50vw - 20vmin), -50%)' }
                            ],
                            {
                                duration: 1000,
                                fill: 'forwards',
                                easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
                            }
                        );
                    }
                    const horizontalTrackImages = document.querySelectorAll('.about-me-image-wrapper') as NodeListOf<Element>;
                    if (horizontalTrackImages) {
                        Array.from(horizontalTrackImages).forEach((imageWrapper, index) => {
                            (imageWrapper as HTMLElement).animate(
                                [
                                    {
                                        opacity: 0.5,
                                        filter: 'blur(5px)'
                                    },
                                    {
                                        opacity: 1,
                                        filter: 'blur(0px)'
                                    }
                                ],
                                {
                                    duration: 1000,
                                    fill: 'forwards',
                                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                                    delay: index * 100 // Add staggered delay for each image
                                }
                            );
                        });
                    }
                    setIsHomePage(true);
                }, 1000);
            }
        })
    }, []);


    return (
        <div>
        <LetterWindow letter="H" x={-40} y={-30} z={0} id="1" size={1} height={0} backgroundColor="red" buttonColor="white" />
        <LetterWindow letter="E" x={-27} y={-36} z={0} id="2" size={0.6} height={0} backgroundColor="blue" buttonColor="white" />
        <LetterWindow letter="Y" x={-17} y={-25} z={0} id="3" size={0.6} height={0} backgroundColor="green" buttonColor="white" />
        <LetterWindow letter="Y" x={-6} y={-30} z={0} id="4" size={0.7} height={0} backgroundColor="yellow" buttonColor="white" />
        <LetterWindow letter="~" x={5} y={-37} z={0} id="5" size={0.6} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="~" x={16} y={-39} z={0} id="6" size={0.6} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="~" x={27} y={-35} z={0} id="7" size={0.6} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="~" x={38} y={-34} z={0} id="8" size={0.6} height={0} backgroundColor="purple" buttonColor="white" />

        <LetterWindow letter="I" x={-6} y={0} z={0} id="9" size={0.5} height={0} backgroundColor="red" buttonColor="white" />
        <LetterWindow letter="'" x={0} y={-6} z={0} id="10" size={0.2} height={0} backgroundColor="blue" buttonColor="white" />
        <LetterWindow letter="M" x={6} y={4} z={0} id="11" size={0.5} height={0} backgroundColor="green" buttonColor="white" />
        
        <PhotoWindow id="12" photoPath="about-me/jeff.png" size={2.1} height={0} x={13} y={-30} z={200} backgroundColor="red" buttonColor="white" />

        <LetterWindow letter="🐢" x={-43} y={35} z={0} id="13" size={0.3} height={1} backgroundColor="purple" buttonColor="white" />

        <LetterWindow letter="J" x={-42} y={10} z={0} id="14" size={0.8} height={0} backgroundColor="yellow" buttonColor="white" />
        <LetterWindow letter="E" x={-28} y={22} z={0} id="15" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="F" x={-14} y={30} z={0} id="16" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="F" x={0} y={34} z={0} id="17" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />
        <LetterWindow letter="🐸" x={-30} y={-16} z={0} id="18" size={0.3} height={1} backgroundColor="purple" buttonColor="white" />
        <div id="19" className="window-style-19" style={{
            position: 'absolute',
            left: '33vw', // Positioned to point at frog at (-30, -16)
            top: '51vh',  // Shifted down a bit
            transform: 'translate(-50%, -50%) rotate(20deg)', // Increased downward rotation
            display: 'flex',
            alignItems: 'center',
            gap: '0.6vw',
            zIndex: 100,
            visibility: 'hidden'
        }}>
            <div style={{
                position: 'relative',
                width: '4vw', // Shortened from 6vw
                height: '0',
                borderTop: '0.3vw solid #FF69B4',
            }}>
                <div style={{
                    position: 'absolute',
                    left: '-0.3vw',
                    top: '-0.6vw',
                    width: '0',
                    height: '0',
                    borderRight: '0.6vw solid #FF69B4',
                    borderTop: '0.45vw solid transparent',
                    borderBottom: '0.45vw solid transparent',
                }}></div>
            </div>
            <span style={{
                color: '#FF69B4',
                fontSize: 'calc(0.6vw + 0.3rem)',
                fontWeight: 'bold'
            }}>Click The Frog</span>
        </div>
        </div>
    )};