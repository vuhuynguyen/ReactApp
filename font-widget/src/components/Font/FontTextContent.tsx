import React from "react";
import { FontTextContentProps } from "./models/Font.model";
import classNames from "classnames";

const FontTextContent = ({ text,
    opacity = 100,
    textColor = 'gray-600',
    bulletColor = 'gray-600',
    fontSize = 'md',
    fontWeight = 'semibold',
    padding = 'pl-1', }: FontTextContentProps) => {
    const containerClasses = classNames('flex items-start pr-2', `opacity-${opacity}`);
    const bulletClasses = classNames(`text-${bulletColor}`, 'text-4xl', '-mt-2');
    const textClasses = classNames(`font-${fontWeight}`, `text-${textColor}`, `text-${fontSize}`, padding);

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