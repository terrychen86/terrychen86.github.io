// @flow strict

type Rgb = {|
  +r: number,
  +g: number,
  +b: number,
|};

export const hexToRgb = (hex: string): ?Rgb => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const colorHex = hex.replace(
    shorthandRegex,
    (_: string, r: string, g: string, b: string) => `${r}${r}${g}${g}${b}${b}`,
  );

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorHex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const rgba = (hex: string, alpha: number): string => {
  const color = hexToRgb(hex);
  if (!color) {
    throw new Error('Invalid color');
  }

  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
};
