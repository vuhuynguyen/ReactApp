import { useEffect, useRef, useState } from "react";
import Font from "../Font/Font";
import { FontImageOpacityLevel as FontOpacityLevel, FontImageSize, FontModel, LayoutDirection } from "../Font/models/Font.model";
import { SelectionFontWidgetLayoutProps } from "./models/FontWidget.model";
import React from "react";

function SelectionFontWidgetLayout({ fonts, onFontSelected }: SelectionFontWidgetLayoutProps): JSX.Element {
    const [activeFont, setActiveFont] = useState<FontModel>();
    const activeFontRef = useRef<HTMLDivElement>(null);

    const handleClick = (font: FontModel) => {
        setActiveFont(font);
        onFontSelected(font);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, font: FontModel) => {
        if (event.key === 'Enter') {
            setActiveFont(font);
        } else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            const currentIndex = fonts.findIndex((f) => f.id === activeFont?.id);
            const offset = event.key === 'ArrowLeft' ? -1 : 1;
            const newIndex = (currentIndex + offset + fonts.length) % fonts.length;
            const newFont = fonts[newIndex];
            setActiveFont(newFont);
        }
    };

    useEffect(() => {
        if (activeFontRef.current) {
            activeFontRef.current.focus();
        }
    }, [activeFont]);

    const renderFont = (font: FontModel, index: number): JSX.Element => {
        const isHighlighted = index === 0;

        return (<div
            key={font.id}
            onClick={() => handleClick(font)}
            onKeyDown={(event) => handleKeyDown(event, font)}
            className={`p-2 cursor-pointer`}
            role="button"
            tabIndex={index}
            ref={font.id === activeFont?.id ? activeFontRef : null}
        >
            <Font
                id={font.id}
                abbr={font.abbr}
                color={font.color}
                colorBlindLabel={font["color-blind-label"]}
                label={font.label}
                opacity={font.id === activeFont?.id ? FontOpacityLevel.Low : FontOpacityLevel.High}
                imageSize={isHighlighted ? FontImageSize.Large : FontImageSize.Small}
                layoutDirection={isHighlighted ? LayoutDirection.Vertical : LayoutDirection.Horizontal}
            ></Font>
        </div>)
    };

    const renderedFonts = fonts.map((font: FontModel, index: number) => renderFont(font, index));

    return (
        <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/5 lg:mr-10 lg:ml-4">{renderedFonts[0]}</div>
            <div className="lg:w-3/5">{renderedFonts.slice(1)}</div>
        </div>
    );
}

export default SelectionFontWidgetLayout;
