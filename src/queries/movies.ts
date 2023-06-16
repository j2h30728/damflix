import { useQuery } from '@tanstack/react-query';

import { Genres } from '../types/movies';

export const useQueryMovieDetailData = () => useQuery<Genres>({ queryKey: ['movie', 'list?language=en'] });
