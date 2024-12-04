import React, { useEffect, useState } from "react";
import Window from "../components/about_me_components/window";
import "../styles/bento_animation.css";
import "../styles/bento.css";

export default function Test() {
   
    const [animationTimer, setAnimationTimer] = useState(
        [0, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, //Heyy~~~
        0.4, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, //I'm
        ]
    );

    let accumulatedTime = 0;
    for (let i = 0; i < animationTimer.length; i++) {
        accumulatedTime += animationTimer[i];
        setTimeout(() => {
            const popup = document.querySelector(`.background-color-${i + 1}`) as HTMLElement;
            if (popup) {
                popup.style.visibility = 'visible';
            }
        }, accumulatedTime * 1000);
    }

    return (
        <>
        <Window letter="H" x={-40} y={-34} id="1" size={0.8} height={0} backgroundColor="red" buttonColor="white" />
        <Window letter="E" x={-27} y={-34} id="2" size={0.8} height={0} backgroundColor="blue" buttonColor="white" />
        <Window letter="Y" x={-14} y={-34} id="3" size={0.8} height={0} backgroundColor="green" buttonColor="white" />
        <Window letter="Y" x={-1} y={-34} id="4" size={0.8} height={0} backgroundColor="yellow" buttonColor="white" />
        <Window letter="~" x={12} y={-34} id="5" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />
        <Window letter="~" x={25} y={-34} id="6" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />
        <Window letter="~" x={38} y={-34} id="7" size={0.8} height={0} backgroundColor="purple" buttonColor="white" />

        <Window letter="I" x={-40} y={0} id="8" size={0.8} height={0} backgroundColor="red" buttonColor="white" />
        <Window letter="'" x={-27} y={0} id="9" size={0.8} height={0} backgroundColor="blue" buttonColor="white" />
        <Window letter="M" x={-14} y={0} id="10" size={0.8} height={0} backgroundColor="green" buttonColor="white" />
        <Window letter="Y" x={8} y={0} id="11" size={0.8} height={0} backgroundColor="yellow" buttonColor="white" />
       
        </> 
    )};