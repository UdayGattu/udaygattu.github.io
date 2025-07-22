import React from 'react';
import clsx from 'clsx';

export function Button({ variant = 'default', className = '', children, ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
        variant === 'ghost'
          ? 'bg-transparent hover:bg-accent/10 text-white/90 hover:text-accent'
          : 'bg-accent text-black hover:bg-accent/80',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 