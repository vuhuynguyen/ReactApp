import { OpacityLevel, FontImageSize, FontModel, LayoutDirection } from "../../Font/models/Font.model";
import { TabModel } from "./Tab.model";

export interface FontWidgetNavBarProps {
  tabs: TabModel[];
  onTabChanged: (contentEndpoint: string) => void;
}

export interface FontWidgetContentProps {
  fonts: FontModel[] | string;
  onFontSelected: (font: FontModel) => void | undefined;
}

export interface SelectionFontWidgetLayoutProps {
  fonts: FontModel[];
  onFontSelected: (font: FontModel) => void;
}