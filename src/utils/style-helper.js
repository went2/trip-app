/**
 * @params obj like { color: string, image: string, gradientColor: string }
 * @return string, the value of background
 */
export function getBackground(bg) {
  return bg.image || bg.color;
}