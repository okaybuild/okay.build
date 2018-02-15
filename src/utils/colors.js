// @flow
import * as chromatism from 'chromatism';

export const PRIMARY_COLORS = {
  blue: '#1e00ff',
  pink: '#e94af5',
  green: '#58ff7c',
  yellow: '#e6ff34',
  orange: '#fd8945',
  red: '#f62730',
  purple: '#7c56ff',
};

export function highContrast(color: string) {
  return chromatism.contrastRatio(color).hex;
}

export function text(bg: string, fg: string, size: number = 4) {
  let bgContrast = chromatism.contrastRatio(bg).hex;
  let fgSaturation = chromatism.convert(fg).hsl.s;
  let faded = chromatism.fade(size, fg, bgContrast).hsl[1];
  faded.s = fgSaturation;
  return chromatism.convert(faded).hex;
}

export const PRIMARY_COLOR_PAIRS = {
  blue: { bg: PRIMARY_COLORS.blue, fg: PRIMARY_COLORS.green },
  pink: { bg: PRIMARY_COLORS.pink, fg: PRIMARY_COLORS.blue },
  green: { bg: PRIMARY_COLORS.green, fg: PRIMARY_COLORS.purple },
  yellow: { bg: PRIMARY_COLORS.yellow, fg: PRIMARY_COLORS.pink },
  orange: { bg: PRIMARY_COLORS.orange, fg: PRIMARY_COLORS.blue },
  red: { bg: PRIMARY_COLORS.red, fg: PRIMARY_COLORS.yellow },
  purple: { bg: PRIMARY_COLORS.purple, fg: PRIMARY_COLORS.green },
};

let lastKey;

export function random<T>(obj: { [key: string]: T }): T {
  let keys = Object.keys(obj).filter(key => key !== lastKey);
  let rand = Math.floor(Math.random() * keys.length);
  lastKey = keys[rand];
  return obj[lastKey];
}
