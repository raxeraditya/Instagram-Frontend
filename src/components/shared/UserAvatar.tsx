import React from 'react';
import { cn } from '../../lib/utils';

interface UserAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export function UserAvatar({ src, alt, size = 'md' }: UserAvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'rounded-full object-cover',
        {
          'w-8 h-8': size === 'sm',
          'w-10 h-10': size === 'md',
          'w-14 h-14': size === 'lg',
        }
      )}
    />
  );
}