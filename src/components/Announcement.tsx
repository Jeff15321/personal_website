import { useState } from 'react';

const Announcement = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleUnderstood = () => {
        setIsExpanded(true);
        // Start fade out animation
        const container = document.querySelector('.announcement-container');
        if (container) {
            container.animate(
                [
                    { 
                        opacity: 1,
                        transform: 'translate(-50%, -50%) scale(1)',
                        filter: 'blur(0px)'
                    },
                    { 
                        opacity: 0,
                        transform: 'translate(-50%, -80%) scale(0.8)',
                        filter: 'blur(12px)'
                    }
                ],
                {
                    duration: 1200,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    fill: 'forwards'
                }
            );
        }
        // Remove component after animation
        setTimeout(() => {
            setIsVisible(false);
        }, 1200);
    };

    if (!isVisible) return null;

    return (
        <div className={`announcement-container ${isExpanded ? 'expanded' : ''}`}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#f4ecd8',
                padding: '4vw',
                borderRadius: '0.4vw', 
                border: '0.15vw solid #2c1810',
                boxShadow: '0 0.4vw 1.2vw rgba(0,0,0,0.15)',
                width: '52vw',
                height: 'auto',
                transition: 'all 0.5s ease',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '3vw',
                marginBottom: '3vw',
                position: 'relative'
            }}>
                <div style={{
                    color: '#2c1810',
                    fontFamily: 'Georgia, serif',
                    fontSize: '2vw',
                    lineHeight: '1.8',
                    textAlign: 'center',
                    maxWidth: '31.25vw',
                    borderTop: '0.15vw solid #2c1810',
                    borderBottom: '0.15vw solid #2c1810',
                    padding: '2vw 0'
                }}>
                    Welcome to my personal website! Begin your journey by typing <span style={{
                        fontStyle: 'italic',
                        fontWeight: 'bold'
                    }}>help</span> in the terminal below to discover what lies ahead.
                </div>
            </div>

            <button
                onClick={handleUnderstood}
                style={{
                    backgroundColor: '#2c1810',
                    border: 'none',
                    color: '#f4ecd8',
                    padding: '1vw 2.5vw',
                    cursor: 'pointer',
                    fontSize: '1.2vw',
                    fontFamily: 'Georgia, serif',
                    transition: 'all 0.3s ease',
                    letterSpacing: '0.2vw'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#3d2317';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#2c1810';
                }}
            >
                Understood
            </button>
        </div>
    );
};

export default Announcement;
