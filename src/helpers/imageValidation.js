export const isValidSize = (width, height) => {
  const validWidth = width <= 1920;
  const validHeight = height <= 1080;
  const validSize = Boolean(validWidth && validHeight);
  return validSize;
};
