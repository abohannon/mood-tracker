import React, { ReactNode, CSSProperties } from 'react';

interface SafeAreaProps {
  children: ReactNode;
  position?: 'top' | 'bottom' | 'both';
  style?: CSSProperties;
}

/**
 * SafeArea component to handle device insets for iOS and other devices
 * with notches, home indicators, or other UI elements that need spacing
 */
const SafeArea: React.FC<SafeAreaProps> = ({
  children,
  position = 'bottom',
  style = {}
}) => {
  // Base styles
  const baseStyle: CSSProperties = {
    ...style,
  };

  // Add appropriate padding based on position
  if (position === 'top' || position === 'both') {
    baseStyle.paddingTop = 'env(safe-area-inset-top)';
  }

  if (position === 'bottom' || position === 'both') {
    baseStyle.paddingBottom = 'env(safe-area-inset-bottom)';
  }

  return (
    <div style={baseStyle}>
      {children}
    </div>
  );
};

export default SafeArea;
