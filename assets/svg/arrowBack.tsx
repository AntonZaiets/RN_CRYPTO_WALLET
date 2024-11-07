import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ArrowBackSvg = () => {
  return (
    <Svg width="36" height="36" viewBox="0 0 24 24" fill="none">
      <Path
        d="M14 8L10 12L14 16"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
