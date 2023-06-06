import React from "react";
import SelectionFontWidgetLayout from "./SelectionFontWidgetLayout";
import { FontWidgetContentProps } from "./models/FontWidget.model";

function FontWidgetContent({ fonts, onFontSelected }: FontWidgetContentProps): JSX.Element {
    let renderedContent: JSX.Element | null = null;

    const renderTextInCenter = (text: string) => {
        return (<div className="flex items-center justify-center h-full">
            <span className="text-center">{text}</span>
        </div>)
    };

    if (!fonts || fonts.length === 0) {
        renderedContent = null;
    } else if (typeof fonts === 'string') {
        renderedContent = renderTextInCenter(fonts);
    } else {
        renderedContent = <SelectionFontWidgetLayout fonts={fonts} onFontSelected={onFontSelected} />;
    }

    return (
        <div className="p-8 border-gray-200 border-2 w-full">
            {renderedContent}
        </div>
    );
}

export default FontWidgetContent;