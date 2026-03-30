import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0KWH_eqCQX61aMbFfFWHCIb7R_xt5q-lTrqZPNgvqWgFWMg/viewform?usp=header";
