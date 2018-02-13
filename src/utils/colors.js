// @flow
import { COLORS } from '../constants';

const COLOR_KEYS = Object.keys(COLORS).filter(key => key !== 'blue');

export function random() {
  let rand = Math.floor(Math.random() * COLOR_KEYS.length);
  return COLORS[COLOR_KEYS[rand]];
}
