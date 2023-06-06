export interface FontModel {
  id: number;
  abbr: string;
  color: string;
  label: string;
  "color-blind-label": string;
}

export interface FontProps extends Omit<FontModel, 'color-blind-label'> {
  colorBlindLabel: string;
  opacity?: FontImageOpacityLevel,
  imageSize: FontImageSize
  layoutDirection: LayoutDirection
};

export interface FontColorPanelProps {
  abbr: string;
  color: string;
  size: FontImageSize;
  opacity?: number;
  colorBlindLabel: string;
};


export interface FontTextContentProps {
  text: string;
  opacity?: number;
  textColor?: string;
  bulletColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
}


export enum FontImageOpacityLevel {
  Low = 50,
  High = 100,
}

export enum FontImageSize {
  Small = 'small',
  Large = 'large',
}

export enum LayoutDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}