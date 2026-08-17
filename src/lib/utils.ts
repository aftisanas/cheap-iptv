import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Convert a plan name like "3 Months" → "3-Month Access",
 * "12 Months" → "12-Month Access", etc.
 */
export function toAccessLabel(planName: string): string {
  const match = planName.match(/^(\d+)\s+Months?$/i);
  return match ? `${match[1]}-Month Access` : `${planName} Access`;
}
