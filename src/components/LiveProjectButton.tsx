import React from 'react';

interface LiveProjectButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  className = '',
  href,
  onClick,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-200 hover:bg-[#D7E2EA]/10 active:scale-[0.98] cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base select-none ${className}`}
      {...props}
    >
      Live Project
    </button>
  );
};
