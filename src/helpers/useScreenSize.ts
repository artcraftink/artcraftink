import { useMediaQuery } from 'react-responsive';

import { BREAKPOINT_RESOLUTIONS } from '../config/constants';

export interface ScreenSize {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  isMobileOrTablet: boolean;
}

/**
 * Hook for screen size helpers.
 * Library references:
 * - <a href="https://github.com/yocontra/react-responsive">https://github.com/yocontra/react-responsive</a>.
 *
 * @returns {{isMobile: boolean, isBetweenMdAndLg: boolean, isLargeDesktop: boolean, isMobileOrTablet: boolean}}
 */
export const useScreenSize = () => {
  const isMobile = useMediaQuery({ maxWidth: BREAKPOINT_RESOLUTIONS.md - 1 });
  const isTablet = useMediaQuery({
    minWidth: BREAKPOINT_RESOLUTIONS.md,
    maxWidth: BREAKPOINT_RESOLUTIONS.lg - 1,
  });
  const isMobileOrTablet = isMobile || isTablet;
  const isDesktop = useMediaQuery({
    minWidth: BREAKPOINT_RESOLUTIONS.lg,
    maxWidth: BREAKPOINT_RESOLUTIONS.xl - 1,
  });
  const isLargeDesktop = useMediaQuery({
    minWidth: BREAKPOINT_RESOLUTIONS.xl,
  });

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isMobileOrTablet,
  };
};
