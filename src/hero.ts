import data from './constants/data.json';
import {
  INPUT_CHARS,
  COLOR_KEYS,
  ANIMATION_KEYS,
  ANIMATION_TYPE,
  AnimationType,
} from './constants/keys';
import { MAX_ANIMATION_DELAY, INTERVAL } from './constants/animation';
import { SCREEN_SIZE } from './constants/screen';
import { ImageType } from './types/ImageType';
import {
  clearAnimationClass,
  clearColorClass,
  elementHasClass,
  setElementClass,
} from './utils/domUtils';
import { getRandomAnimationDelayValue } from './utils/commonUtils';

let imageContainer = document.querySelector<HTMLDivElement>('#image-container');

const staticDotsLargeScreen = '00000000000000000000000000';
const staticDotsMediumScreen = '000000';
const staticDotsMediumHorizontalScreen = '0000000000000000000000000000000';
const excludedFromLoopImagesIndexes = [3, 4];
let classList: string[] = [];
let currentImageIndex = 0;
let isPaused = false;
let dots: NodeListOf<HTMLSpanElement> | [] = [];
let isMouseMove = false;
let isLinkButtonHovered = false;

let mobileImages: ImageType[] = data;

const tabletImages = mobileImages.map((obj) => ({
  ...obj,
  value: obj.value.map(
    (str) => staticDotsMediumScreen + str + staticDotsMediumScreen
  ),
}));

const tablet2Images = mobileImages.map((obj) => ({
  ...obj,
  value: obj.value.map((str) => staticDotsMediumHorizontalScreen + str),
}));

const desktopImages = mobileImages.map((obj) => ({
  ...obj,
  value: obj.value.map((str) => staticDotsLargeScreen + str),
}));

const getImages = () => {
  if (window.innerWidth <= SCREEN_SIZE.SM) {
    return mobileImages;
  }

  if (
    window.innerWidth >= SCREEN_SIZE.SM &&
    window.innerWidth <= SCREEN_SIZE.MD
  ) {
    return tabletImages;
  }

  if (
    window.innerWidth >= SCREEN_SIZE.MD &&
    window.innerWidth <= SCREEN_SIZE.MD2
  ) {
    return tablet2Images;
  }

  return desktopImages;
};

const clearJSClasses = (el: HTMLSpanElement): void => {
  clearAnimationClass(el);
  clearColorClass(el);

  mobileImages.forEach((_, index: number) => {
    el.classList.remove(String(index));
  });
};

const getAnimationOutClassByType = (type: string): string[] | null => {
  switch (type) {
    case ANIMATION_TYPE.PRIMARY:
      return [COLOR_KEYS.PRIMARY, ANIMATION_KEYS.PRIMARY_OUT];
    case ANIMATION_TYPE.SECONDARY:
      return [COLOR_KEYS.SECONDARY, ANIMATION_KEYS.SECONDARY_OUT];
    default:
      return null;
  }
};

const animateOutByType = (el: HTMLSpanElement, type: AnimationType): void => {
  clearAnimationClass(el);
  clearColorClass(el);

  const classList = getAnimationOutClassByType(type);

  if (classList) {
    el.style.animationDelay = getRandomAnimationDelayValue();

    setElementClass(el, classList);
  }
};

const drawImage = (
  img: string[] | undefined,
  container: HTMLDivElement | null
): void => {
  if (!img || !container) {
    console.error('No image container provided', {
      container,
      img,
    });
    return;
  }

  img.forEach((item) => {
    const row: HTMLDivElement = document.createElement('div');
    setElementClass(row, ['row']);
    item.split('').map((item) => {
      const dotEl: HTMLSpanElement = document.createElement('div');
      const div: HTMLDivElement = document.createElement('div');

      setElementClass(dotEl, ['dot', item]);
      dotEl.style.animationDelay = getRandomAnimationDelayValue();

      switch (item) {
        case INPUT_CHARS.PRIMARY:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.PRIMARY_IN];
          break;
        case INPUT_CHARS.SECONDARY:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.SECONDARY_IN];
          break;
        default:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.DEFAULT_IN];
          break;
      }

      setElementClass(div, classList);
      dotEl.append(div);
      row.append(dotEl);
    });

    container.append(row);
  });

  dots = document.querySelectorAll<HTMLSpanElement>(`.dot`);
};

const updateImage = (
  image?: string[] | undefined
): (() => ReturnType<typeof clearTimeout>) | null => {
  if (isPaused) {
    return null;
  }

  if (
    excludedFromLoopImagesIndexes.includes(currentImageIndex) &&
    !isLinkButtonHovered
  ) {
    currentImageIndex = 0;
  }

  const _images = getImages();

  let nextImageChars: string[] = [];
  const nextImage = image ? image : _images[currentImageIndex].value;
  dots = document.querySelectorAll<HTMLSpanElement>(`.dot`);

  const charsLength: number = nextImage.reduce(
    (acc: number, el: string) => (acc += el.length),
    0
  );

  nextImage.forEach((row) => nextImageChars.push(...row));

  if (dots.length !== charsLength) {
    return null;
  }

  nextImageChars.forEach((_, index) => {
    const div = dots[index].getElementsByTagName('div');
    const el = div[0];

    if (elementHasClass(el, INPUT_CHARS.PRIMARY)) {
      animateOutByType(el, ANIMATION_TYPE.PRIMARY);
    }

    if (elementHasClass(el, INPUT_CHARS.SECONDARY)) {
      animateOutByType(el, ANIMATION_TYPE.SECONDARY);
    }
  });

  if (isPaused) {
    return null;
  }

  const timer: ReturnType<typeof setTimeout> = setTimeout((): void => {
    nextImageChars.forEach((char, index) => {
      const div = dots[index].getElementsByTagName('div');
      const el = div[0];
      el.style.animationDelay = getRandomAnimationDelayValue();

      clearJSClasses(el);

      switch (char) {
        case INPUT_CHARS.PRIMARY:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.PRIMARY_IN];
          setElementClass(el, classList);
          break;
        case INPUT_CHARS.SECONDARY:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.SECONDARY_IN];
          setElementClass(el, classList);
          break;
        default:
          classList = [COLOR_KEYS.DEFAULT, ANIMATION_KEYS.DEFAULT_IN];
          setElementClass(el, classList);
      }

      el.classList.add(char);
    });
  }, MAX_ANIMATION_DELAY);

  handleHeroCopyHighlight();

  currentImageIndex < mobileImages.length - 1
    ? currentImageIndex++
    : (currentImageIndex = 0);

  return () => clearTimeout(timer);
};

const handleMouseOverButton = (e: MouseEvent) => {
  const target = e.target as Element;
  const imageIndexAttr = Number(target?.getAttribute('data-image-index'));
  currentImageIndex = imageIndexAttr;

  isLinkButtonHovered = excludedFromLoopImagesIndexes.includes(imageIndexAttr);

  if (isMouseMove) {
    return;
  }

  const images = getImages();

  updateImage(images[currentImageIndex].value);
  isPaused = true;
};

const hanldeMouseLeaveButton = () => {
  isPaused = false;
  isLinkButtonHovered = false;
};

const initButtonListeners = () => {
  const buttons: NodeListOf<HTMLButtonElement> =
    document.querySelectorAll('.hero-js-button');

  if (buttons?.length) {
    buttons.forEach((button: HTMLButtonElement) => {
      button?.addEventListener('mouseenter', (e) => handleMouseOverButton(e));
      button?.addEventListener('mouseleave', hanldeMouseLeaveButton);
    });

    return () => {
      buttons.forEach((button: HTMLButtonElement) => {
        button?.removeEventListener('mouseenter', (e) =>
          handleMouseOverButton(e)
        );
        button?.removeEventListener('mouseleave', hanldeMouseLeaveButton);
      });
    };
  }
};

export const initHeroSection = (
  el: HTMLDivElement
): (() => ReturnType<typeof clearInterval>) | void => {
  const testEL = el ? el : imageContainer;
  if (!testEL || imageContainer) {
    return;
  }

  testEL.innerHTML = '';

  const images = getImages();

  drawImage(images[currentImageIndex].value, testEL);

  initButtonListeners();

  const interval: ReturnType<typeof setInterval> = setInterval(
    () => updateImage(),
    INTERVAL
  );

  if (!imageContainer) {
    imageContainer = document.querySelector('#image-container');
  }

  return () => clearInterval(interval);
};

const renderResizedImage = () => {
  const images = getImages();

  if (imageContainer) {
    imageContainer.innerHTML = '';
    drawImage(images[currentImageIndex].value, imageContainer);
  }
};

const handleWindowResize = () => {
  let imgContainerWidth = imageContainer?.getBoundingClientRect()?.width;
  let heroSectionHeight = imageContainer?.getBoundingClientRect()?.height;

  document.documentElement.style.setProperty(
    '--image-container-width',
    String(imgContainerWidth) + 'px'
  );

  if (!!heroSectionHeight && window.innerWidth >= 1360) {
    document.documentElement.style.setProperty(
      '--hero-height',
      String(heroSectionHeight + 106) + 'px'
    );

    // document.documentElement.style.setProperty(
    //   '--image-container-width',
    //   String(imgContainerWidth && imgContainerWidth / 1.1) + 'px'
    // );
  }

  renderResizedImage();
};

const handleHeroCopyHighlight = () => {
  const currentHighlightedButton = document.querySelector<HTMLButtonElement>(
    `[data-image-index="${currentImageIndex}"]`
  );

  const jsButtons =
    document.querySelectorAll<HTMLButtonElement>('.hero-js-button');

  jsButtons.forEach((btn) => {
    btn.classList.remove('hero-js-copy-highlighted');
  });

  const buttonIndex =
    currentHighlightedButton?.getAttribute('data-image-index');

  if (buttonIndex) {
    if (!excludedFromLoopImagesIndexes.includes(Number(buttonIndex))) {
      currentHighlightedButton?.classList.add('hero-js-copy-highlighted');
    }
  }
};

const debouncedResizehandler = debounce(() => handleWindowResize(), 70);

window.addEventListener('load', () => {
  handleWindowResize();
  window.addEventListener('resize', debouncedResizehandler);
  return () => {
    window.removeEventListener('resize', debouncedResizehandler);
  };
});

function debounce(callback: any, delay: number = 100) {
  var time: ReturnType<typeof setTimeout>;
  return (...args: any) => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
