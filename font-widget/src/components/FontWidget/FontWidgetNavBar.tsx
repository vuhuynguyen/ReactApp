import React from "react";
import { useCallback, useEffect, useState } from "react";
import { FontWidgetNavBarProps } from "./models/FontWidget.model";
import { TabModel } from "./models/Tab.model";

function FontWidgetNavBar({ tabs, onTabChanged }: FontWidgetNavBarProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<TabModel>();

  const handleTabClicked = useCallback((tab: TabModel) => {
    if (activeTab?.id === tab.id) {
      return;
    }

    setActiveTab(tab);
    onTabChanged(tab.content_endpoint);
  }, [activeTab?.id, onTabChanged]);

  useEffect(() => {
    if (tabs.length > 0) {
      handleTabClicked(tabs[0]);
    }
  }, [tabs]);

  return (
    <div className="flex lg:mt-0 lg:flex-shrink-0">
      <div className="flex space-x-4 cursor-pointer font-bold text-xs">
        {tabs.map((tab: TabModel, index) => (
          <div
            key={index}
            onClick={() => handleTabClicked(tab)}
            className={activeTab?.id === tab.id ? "text-gray-500" : "text-orange-500"}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FontWidgetNavBar;