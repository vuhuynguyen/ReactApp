import { useEffect, useState } from "react";
import FontWidgetContent from "../components/FontWidget/FontWidgetContent";
import { FontsContextType } from "../context/Font";
import useFontsContext from "../hooks/use-font-context";
import FontWidgetNavBar from "../components/FontWidget/FontWidgetNavBar";
import { TabModel } from "../components/FontWidget/models/Tab.model";
import { FontModel } from "../components/Font/models/Font.model";
import { ApiEndpoints } from "../Api/EndPoints";
import { getData } from "../Api/Api.service";
import React from "react";

function FontPage() {
    const { fonts, setSelectedFont, fetchFonts }: FontsContextType = useFontsContext();
    const [tabs, setTabs] = useState<TabModel[]>([]);

    const getTabs = async () => {
        const response: TabModel[] = await getData(ApiEndpoints.TabList);
        setTabs(response);
    };

    useEffect(() => {
        getTabs();
    }, []);

    const handleTabChange = (contentEndpoint: string) => {
        fetchFonts(contentEndpoint);
    };

    const handleFontSelection = (font: FontModel) => {
        setSelectedFont(font);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="p-6 mx-4 max-w-lg lg:max-w-2xl">
                <div className="flex flex-col md:flex-row py-2 px-2 mx-6">
                    <div className="flex flex-wrap justify-between items-baseline w-full">
                        <h2 className="text-2xl text-gray-900 font-medium mb-2 lg:mb-0">
                            <span >Please select one font</span>
                        </h2>
                        <div className="flex justify-end w-full lg:w-auto">
                            <FontWidgetNavBar tabs={tabs} onTabChanged={handleTabChange} />
                        </div>
                    </div>
                </div>
                <div className="py-2 px-2 sm:px-3 lg:py-2 lg:px-4">
                    <FontWidgetContent fonts={fonts} onFontSelected={handleFontSelection} />
                </div>
            </div>
        </div>
    )
}

export default FontPage;