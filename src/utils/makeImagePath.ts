const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const ImageFormat = {
  ORIGINAL: 'original',
  W500: 'w500',
} as const;

type ImageFormat = 'original' | 'w500';

export function makeImagePath(imagePath: string, format: ImageFormat) {
  return `${IMAGE_BASE_URL}${format}/${imagePath}`;
}
