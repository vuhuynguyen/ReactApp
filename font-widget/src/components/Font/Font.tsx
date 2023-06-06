import React from 'react';
import FontColorPanel from './FontColorPanel';
import FontTextContent from './FontTextContent';
import { FontProps, LayoutDirection } from './models/Font.model';
import classNames from 'classnames';

function Font({ abbr, color, colorBlindLabel, label, opacity, imageSize, layoutDirection }: FontProps): JSX.Element {
  const isHorizontal = layoutDirection === LayoutDirection.Horizontal;

  return (
    <div className={classNames('flex', isHorizontal ? 'flex-row' : 'flex-col')}>
      <div>
        <FontColorPanel abbr={abbr} color={color} size={imageSize} opacity={opacity} colorBlindLabel={colorBlindLabel} />
      </div>
      <div className={classNames(isHorizontal ? 'ml-4 mt-2' : 'mt-4')}>
        <FontTextContent text={label} opacity={opacity} />
      </div>
    </div>
  );
}

export default Font;
