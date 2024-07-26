import { ANIMATION_KEYS, COLOR_KEYS } from '../constants/keys';

export const clearAnimationClass = (el: HTMLSpanElement): void => {
  Object.values(ANIMATION_KEYS).forEach((cls: string) =>
    el.classList.remove(cls)
  );
};

export const clearColorClass = (el: HTMLSpanElement): void => {
  Object.values(COLOR_KEYS).forEach((cls: string) => el.classList.remove(cls));
};

export const elementHasClass = (el: HTMLElement, cls: string): boolean => {
  if (!el || !cls) return false;

  return el.classList.contains(cls);
};

export const setElementClass = (
  el: HTMLSpanElement | HTMLDivElement,
  classList: string[]
): void => classList.forEach((cls: string) => el.classList.add(cls));
