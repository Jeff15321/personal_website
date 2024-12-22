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

    const handleEmailClick = () => {
        const subject = encodeURIComponent("HEYYY YOU HAVE A BUG YOU GOTTA LET ME IN");
        window.location.href = `mailto:jeff.lu234@gmail.com?subject=${subject}&body=${subject}`;
    };

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
                    Detected mobile device. This website mimics the linux terminal and require a keyboard and wide screen for the most optimal user experience. Please come back with a computer and visit again! Sorry for the inconvenience.
                </p>
                <br></br>
                <p style={{
                    color: '#2c1810',
                    fontFamily: 'Georgia, serif',
                    fontSize: '16px',
                    lineHeight: 1.6,
                    marginBottom: '20px'
                }}>
                    If you are on a computer and still sees this, please yell at me through the button below.
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

                <button
                    onClick={handleEmailClick}
                    style={{
                        backgroundColor: '#2c1810',
                        color: '#f4ecd8',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '4px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        fontFamily: 'Georgia, serif',
                        fontSize: '14px',
                        transition: 'background-color 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#3d2317';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = '#2c1810';
                    }}
                >
                    Yell at me!
                </button>
            </div>
        </div>
    );
};

export default MobileChecker;
