import React, { useEffect } from "react";
import Window from "../components/about_me_components/window";
import "../styles/bento.css";
import "../styles/globals.css";
import "../styles/test.css";
import { useState } from "react";
export default function Test() {
    const [x, setX] = useState(0);

    useEffect(() => {
        setTimeout(captureAndApplyFinalState, 1000);
    }, [x]);

    const captureAndApplyFinalState = () => {
        const testPage = document.querySelector(".test-page");
        if (!testPage) return;

        // Get the computed style at the end of the animation
        const computedStyle = window.getComputedStyle(testPage);
        
        // Extract transform, and apply it directly
        (testPage as HTMLElement).style.transform = computedStyle.transform;

        // Optional: Remove animation classes
        testPage.classList.remove('Y', 'X');
        
    };

    return (
        <div>
            <button 
                style={{backgroundColor: "#ffff00", color: "#000000"}} 
                onClick={() => {
                    const testPage = document.querySelector(".test-page");
                    if (testPage) {
                        testPage.classList.add("Y");
                        setX(prev => prev + 1);
                    }
                    // Use setTimeout to capture state after animation
                }}
            >
                TRANSLATE Y
            </button>
            <button 
                style={{backgroundColor: "#ff0000", color: "#000000"}} 
                onClick={() => {
                    const testPage = document.querySelector(".test-page");
                    testPage?.classList.add("X");
                    setX(prev => prev + 1);
                    // Use setTimeout to capture state after animation
                }}
            >
                TRANSLATE X
            </button>
            <div 
                className="test-page"
                style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                }}
            >
                <h1>Test Page</h1>
            </div>
        </div>
    );
}