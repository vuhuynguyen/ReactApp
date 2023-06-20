import React from "react";
import { FontTextContentProps } from "./models/Font.model";
import classNames from "classnames";

const FontTextContent = ({ text,
    opacity = 'opacity-100',
    textColor = 'text-gray-600',
    bulletColor = 'text-gray-600',
    fontSize = 'font-md',
    fontWeight = 'font-semibold',
    padding = 'pl-1', }: FontTextContentProps) => {
    const containerClasses = classNames('flex items-start pr-2', opacity);
    const bulletClasses = classNames(bulletColor, 'text-4xl', '-mt-2');
    const textClasses = classNames(fontWeight, textColor, fontSize, padding);

    return (
        <div className={containerClasses}>
            <span className={bulletClasses}>&bull;</span>
            <div>
                <span className={textClasses}>{text}</span>
            </div>
        </div>
    );
};

export default FontTextContent;