import { createContext, useState } from "react";
import { FontModel } from "../components/Font/models/Font.model";
import { getData } from "../Api/Api.service";

export type FontsContextType = {
    fonts: FontModel[];
    fetchFonts: (contentEndpoint: string) => void;
    setSelectedFont: (font: FontModel) => void;
};

const FontsContext = createContext<FontsContextType | undefined>(undefined);

function Provider({ children }: { children: JSX.Element }) {
    const [fonts, setFonts] = useState<FontModel[]>([]);
    const [selectedFont, setSelectedFont] = useState({} as FontModel);

    const fetchFonts = async (contentEndpoint: string) => {
        const response: { content: FontModel[] } = await getData(contentEndpoint);
        setFonts(response.content);
    };

    const valueToShare = {
        fonts,
        selectedFont,
        fetchFonts,
        setSelectedFont
    };

    return (
        <FontsContext.Provider value={valueToShare}>
            {children}
        </FontsContext.Provider>
    )
}

export { Provider };

export default FontsContext;