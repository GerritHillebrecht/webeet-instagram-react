import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRelativeTime(dateString: string): string {
  const rtf = new Intl.RelativeTimeFormat('en-US', { numeric: 'auto' });

  const now = new Date();
  const then = new Date(dateString);
  const diff = (then.getTime() - now.getTime()) / 1000; // Unterschied in Sekunden

  const ranges = [
    { unit: 'year', seconds: 31536000 },
    { unit: 'month', seconds: 2592000 },
    { unit: 'week', seconds: 604800 },
    { unit: 'day', seconds: 86400 },
    { unit: 'hour', seconds: 3600 },
    { unit: 'minute', seconds: 60 },
    { unit: 'second', seconds: 1 },
  ] as const;

  for (const range of ranges) {
    const value = Math.round(diff / range.seconds);
    if (Math.abs(value) >= 1) {
      return rtf.format(value, range.unit);
    }
  }

  return rtf.format(0, 'second'); // falls genau jetzt
}
