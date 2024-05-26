/* eslint-disable @typescript-eslint/no-explicit-any */
import { type CSSObject, type SimpleInterpolation, css } from 'styled-components';

type Breakpoints = 'large' | 'medium' | 'small';

const breakpoints: Record<Breakpoints, string> = {
  large: '@media (max-width: 1200px)',
  medium: '@media (max-width: 768px)',
  small: '@media (max-width: 600px)',
};

export const media = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  return {
    ...acc,
    [key]: (first: CSSObject | TemplateStringsArray, ...interpolations: SimpleInterpolation[]) => css`
      ${value} {
        ${css(first, ...interpolations)}
      }
    `,
  };
}, {} as Record<string, any>);
