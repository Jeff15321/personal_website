import React from "react";

interface LanguageCardProps {
    height: number;
    width: number;
    project: any;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ height, width, project }) => {
    return (
        <div
            className="parent-container"
            style={{
                height: `${height}%`,
                width: `${width}%`,
                overflow: "hidden", // Ensure overflow is hidden
                position: "relative", // Required for absolute positioning
            }}
        >
            <div className={`language-container ${project.theme[0]} animate-scroll`}>
                {/* Repeat the language array twice for seamless scrolling */}
                {[...project.languages, ...project.languages].map((lang, index) => (
                    <img
                        key={index}
                        className="language-logo"
                        src={`logo/${lang}.png`}
                        alt={lang}
                    />
                ))}
            </div>
        </div>
    );
};

export default LanguageCard;
