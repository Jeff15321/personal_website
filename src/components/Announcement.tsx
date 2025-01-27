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
                        transform: 'translate(-50%, -50%) scale(1)'
                    },
                    { 
                        opacity: 0,
                        transform: 'translate(-50%, -60%) scale(0.95)'
                    }
                ],
                {
                    duration: 800,
                    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
                    fill: 'forwards'
                }
            );
        }
        setTimeout(() => setIsVisible(false), 800);
    };

    if (!isVisible) return null;

    return (
        <div className={`announcement-container ${isExpanded ? 'expanded' : ''}`}
            style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#0A192F',
                padding: '4vw',
                borderRadius: '1.5rem',
                border: '1px solid rgba(136, 146, 176, 0.2)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                width: '50vw',
                height: 'auto',
                transition: 'all 0.5s ease',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '3vw',
                backdropFilter: 'blur(10px)',
                background: 'linear-gradient(145deg, #0A192F 0%, #112240 100%)'
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2.5vw',
                width: '100%'
            }}>
                <h1 style={{
                    color: '#CCD6F6',
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: '2.8vw',
                    fontWeight: '400',
                    letterSpacing: '0.02em',
                    marginBottom: '0.5vw',
                    position: 'relative'
                }}>
                    <span style={{ color: '#64FFDA' }}>$</span> ./welcome.sh
                </h1>
                <div style={{
                    color: '#8892B0',
                    fontFamily: '"Source Code Pro", monospace',
                    fontSize: '1.4vw',
                    lineHeight: '1.8',
                    textAlign: 'center',
                    padding: '3vw',
                    background: 'rgba(204, 214, 246, 0.02)',
                    borderRadius: '1rem',
                    width: '100%',
                    border: '1px solid rgba(100, 255, 218, 0.1)',
                    position: 'relative'
                }}>
                    Type <span style={{
                        color: '#64FFDA',
                        fontWeight: '500'
                    }}>help</span> in the terminal below to begin your journey.
                    <br/>
                    <span style={{
                        fontSize: '1.1vw',
                        display: 'block',
                        marginTop: '1.5vw',
                        color: '#8892B0',
                        fontStyle: 'italic'
                    }}>
                        For a simplified and automated experience, use the right button below.
                    </span>
                </div>
            </div>

            <div style={{
                display: 'flex',
                gap: '1.5vw',
                width: '100%'
            }}>
                <button
                    onClick={handleUnderstood}
                    style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        border: '1px solid #64FFDA',
                        color: '#64FFDA',
                        padding: '1.2vw',
                        borderRadius: '0.6rem',
                        cursor: 'pointer',
                        fontSize: '1.2vw',
                        fontFamily: '"Source Code Pro", monospace',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.1em',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(100, 255, 218, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                >
                    $ ./Begin.sh
                </button>

                <button
                    onClick={handleUnderstood}
                    style={{
                        flex: 1,
                        backgroundColor: '#64FFDA',
                        border: '1px solid #64FFDA',
                        color: '#0A192F',
                        padding: '1.2vw',
                        borderRadius: '0.6rem',
                        cursor: 'pointer',
                        fontSize: '1.2vw',
                        fontFamily: '"Source Code Pro", monospace',
                        transition: 'all 0.3s ease',
                        letterSpacing: '0.1em',
                        fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '0.9';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '1';
                    }}
                >
                    $ ./automated.sh
                </button>
            </div>
        </div>
    );
};

export default Announcement;
