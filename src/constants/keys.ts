type InputCharType = '1' | '2' | '0';

type ColorClassKeyType = 'primary-bg' | 'secondary-bg' | 'default-bg';
export type AnimationType = 'primary' | 'secondary';

type AnimationClassKeyType =
  | 'primaryAnimationIn'
  | 'primaryAnimationOut'
  | 'secondaryAnimationIn'
  | 'secondaryAnimationOut'
  | 'defaultAnimationIn';

export const ANIMATION_KEYS = {
  PRIMARY_IN: 'primaryAnimationIn' as AnimationClassKeyType,
  PRIMARY_OUT: 'primaryAnimationOut' as AnimationClassKeyType,
  SECONDARY_IN: 'secondaryAnimationIn' as AnimationClassKeyType,
  SECONDARY_OUT: 'secondaryAnimationOut' as AnimationClassKeyType,
  DEFAULT_IN: 'defaultAnimationIn' as AnimationClassKeyType,
};

export const ANIMATION_TYPE = {
  PRIMARY: 'primary' as AnimationType,
  SECONDARY: 'secondary' as AnimationType,
};

export const COLOR_KEYS = {
  PRIMARY: 'primary-bg' as ColorClassKeyType,
  SECONDARY: 'secondary-bg' as ColorClassKeyType,
  DEFAULT: 'default-bg' as ColorClassKeyType,
};

export const INPUT_CHARS = {
  PRIMARY: '1' as InputCharType,
  SECONDARY: '2' as InputCharType,
  DEFAULT: '0' as InputCharType,
};
