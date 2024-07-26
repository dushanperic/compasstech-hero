import {
  MIN_ANIMATION_DELAY,
  MAX_ANIMATION_DELAY,
} from '../constants/animation';

export const randomIntFromInterval = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getRandomAnimationDelayValue = (): string =>
  `${randomIntFromInterval(MIN_ANIMATION_DELAY, MAX_ANIMATION_DELAY)}ms`;
