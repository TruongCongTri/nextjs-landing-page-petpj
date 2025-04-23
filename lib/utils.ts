import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // clsx  joining className
  // twMerge check if there is any config within the class and optimize
  return twMerge(clsx(inputs));
}
