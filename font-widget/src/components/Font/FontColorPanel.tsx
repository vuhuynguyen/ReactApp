import React from "react";
import { FontColorPanelProps, FontImageSize } from "./models/Font.model";


function FontColorPanel({ abbr, color, size, opacity, colorBlindLabel }: FontColorPanelProps): JSX.Element {
    const isBigSize = size === FontImageSize.Large;

    const backgroundStyle = {
        backgroundColor: color,
        opacity: `${opacity}%`,
    };

    return (
        <div className={`${isBigSize ? 'w-32 h-32' : 'w-24 h-24'} border border-gray-900 rounded-2xl relative`} aria-label={colorBlindLabel}>
            <div
                style={backgroundStyle}
                className="w-[96%] h-[96%] rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            ></div>
            <div className={`absolute bottom-2 left-2 font-bold text-gray-200 text-opacity-50 ${isBigSize ? 'text-4xl' : 'text-2xl'}`}>
                <div>{abbr}</div>
            </div>
        </div>
    );
}

export default FontColorPanel;
