import React from 'react';

interface AppFooterProps {
  className?: string;
}

export const AppFooter: React.FC<AppFooterProps> = ({ className = '' }) => {
  return (
    <footer className={`app-footer ${className}`}>
      © Korean-name-studio. 2025, All rights reserved.
    </footer>
  );
};