// @flow strict

const breakpoints = {
  xxs: 375,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

type Breakpoint = $Keys<typeof breakpoints>;

const above = (bp: Breakpoint): string => `@media (min-width: ${breakpoints[bp]}px)`;
const below = (bp: Breakpoint): string => `@media (max-width: ${breakpoints[bp] - 1}px)`;
const between = (start: Breakpoint, end: Breakpoint): string =>
  `@media (min-width: ${breakpoints[start]}px) and (max-width: ${breakpoints[end] - 1}px)`;

export default {
  above,
  below,
  between,
};
