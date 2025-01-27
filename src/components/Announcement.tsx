import { useState } from 'react';

const Announcement = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const handleUnderstood = () => {
        setIsExpanded(true);
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
        setTimeout(() => setIsVisible(false), 1200);
    };

    if (!isVisible) return null;

    return (
        <div className={`announcement-container ${isExpanded ? 'expanded' : ''}`}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#0a0a16',
                padding: '3vw',
                borderRadius: '1rem',
                border: '0.15vw solid #00ffbb',
                boxShadow: '0 0 2vw rgba(0, 255, 187, 0.2), inset 0 0 2vw rgba(0, 255, 187, 0.1)',
                width: '45vw',
                height: 'auto',
                transition: 'all 0.5s ease',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vw'
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2vw',
                position: 'relative',
                width: '100%'
            }}>
                <h1 style={{
                    color: '#00ffbb',
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: '2.5vw',
                    fontWeight: 'bold',
                    marginBottom: '1vw',
                    textShadow: '0 0 10px rgba(0, 255, 187, 0.5)'
                }}>
                    $ ./welcome.sh
                </h1>
                <div style={{
                    color: '#ffffff',
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: '1.5vw',
                    lineHeight: '1.8',
                    textAlign: 'center',
                    padding: '2vw',
                    background: 'rgba(0, 255, 187, 0.05)',
                    borderRadius: '0.8rem',
                    width: '100%',
                    border: '1px solid rgba(0, 255, 187, 0.2)'
                }}>
                    Type <span style={{
                        color: '#00ffbb',
                        fontWeight: 'bold',
                        textShadow: '0 0 5px rgba(0, 255, 187, 0.5)'
                    }}>help</span> in the terminal below to begin your journey.
                    <br/>
                    <span style={{
                        fontSize: '1.2vw',
                        opacity: 0.8,
                        display: 'block',
                        marginTop: '1vw',
                        color: '#b3b3b3'
                    }}>
                        If you prefer not to use the terminal, click the right button for a hands fre approach.
                    </span>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '1vw',
                width: '100%'
            }}>
                <button
                    onClick={handleUnderstood}
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: '2px solid #00ffbb',
                        color: '#00ffbb',
                        padding: '1vw 3vw',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1.2vw',
                        fontFamily: '"Source Code Pro", monospace',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.2vw',
                        textShadow: '0 0 5px rgba(0, 255, 187, 0.5)',
                        boxShadow: '0 0 15px rgba(0, 255, 187, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00ffbb';
                        e.currentTarget.style.color = '#0a0a16';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 187, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#00ffbb';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 187, 0.1)';
                    }}
                >
                    $ ./start.sh
                </button>

                <button
                    onClick={() => {
                        // Add your simplified approach navigation here
                        handleUnderstood();
                        // Example: navigate to a specific section or trigger a specific action
                    }}
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: '2px solid #ff3e88',
                        color: '#ff3e88',
                        padding: '1vw 3vw',
                        borderRadius: '0.5rem',
                        cursor: 'pointer',
                        fontSize: '1.2vw',
                        fontFamily: '"Source Code Pro", monospace',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.2vw',
                        textShadow: '0 0 5px rgba(255, 62, 136, 0.5)',
                        boxShadow: '0 0 15px rgba(255, 62, 136, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff3e88';
                        e.currentTarget.style.color = '#0a0a16';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 62, 136, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#ff3e88';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 62, 136, 0.1)';
                    }}
                >
                    $ ./simplified.sh
                </button>
            </div>
        </div>
    );
};

export default Announcement;
