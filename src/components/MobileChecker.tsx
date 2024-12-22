import { useState, useEffect } from 'react';

const MobileChecker = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if device is mobile/tablet or has no keyboard
        const checkDevice = () => {
            const hasTouchScreen = navigator.maxTouchPoints > 0 || 
                'ontouchstart' in window || 
                // @ts-ignore
                (window.DocumentTouch && document instanceof DocumentTouch);
                
            // Assuming devices without keyboards are touch devices
            // This is a simplified check - you may want to add more specific checks
            if (hasTouchScreen) {
                setIsVisible(true);
                // Prevent scrolling on the body
                document.body.style.overflow = 'hidden';
            }
        };

        checkDevice();
    }, []);

    if (!isVisible) return null;

    return (
        <div className="mobile-checker-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 9999,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                backgroundColor: '#f4ecd8',
                padding: '4vw',
                borderRadius: '0.4vw',
                border: '0.15vw solid #2c1810',
                boxShadow: '0 0.4vw 1.2vw rgba(0,0,0,0.15)',
                width: '90%',
                maxWidth: '600px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#2c1810',
                    fontFamily: 'Georgia, serif',
                    fontSize: '24px',
                    marginBottom: '20px'
                }}>
                    Desktop Access Required
                </h2>
                
                <p style={{
                    color: '#2c1810',
                    fontFamily: 'Georgia, serif',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                }}>
                    I apologize, but this website requires a desktop computer with a keyboard to provide the best experience. 
                    Please visit this site on a desktop computer to explore all features.
                </p>

                <div style={{
                    width: '40px',
                    height: '40px',
                    margin: '0 auto',
                    backgroundImage: `url('/vintage-ornament-left.png')`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.8
                }} />
            </div>
        </div>
    );
};

export default MobileChecker;
