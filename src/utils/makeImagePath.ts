const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

export const ImageFormat = {
  ORIGINAL: 'original',
  W300: 'w300',
  W500: 'w500',
} as const;

type ImageFormat = 'original' | 'w300' | 'w500';

export function makeImagePath(imagePath: string | undefined, format: ImageFormat) {
  if (imagePath) return `${IMAGE_BASE_URL}${format}/${imagePath}`;
}
