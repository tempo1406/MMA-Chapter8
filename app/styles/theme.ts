import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const COLORS = {
  // Light theme
  light: {
    primary: '#6366F1',
    secondary: '#8B5CF6',
    background: '#F8FAFC',
    card: '#FFFFFF',
    text: '#1E293B',
    textSecondary: '#64748B',
    border: '#E2E8F0',
    error: '#EF4444',
    success: '#10B981',
    warning: '#F59E0B',
    tabBar: '#FFFFFF',
    tabBarBorder: '#E2E8F0',
    drawerBackground: '#FFFFFF',
    drawerBorder: '#E2E8F0',
    switchTrack: '#E2E8F0',
    switchThumb: '#FFFFFF',
    switchActive: '#6366F1',
  },
  // Dark theme
  dark: {
    primary: '#818CF8',
    secondary: '#A78BFA',
    background: '#0F172A',
    card: '#1E293B',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    border: '#334155',
    error: '#F87171',
    success: '#34D399',
    warning: '#FBBF24',
    tabBar: '#1E293B',
    tabBarBorder: '#334155',
    drawerBackground: '#1E293B',
    drawerBorder: '#334155',
    switchTrack: '#334155',
    switchThumb: '#F1F5F9',
    switchActive: '#818CF8',
  },
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontWeight: '400' as const,
  },
  medium: {
    fontFamily: 'System',
    fontWeight: '500' as const,
  },
  bold: {
    fontFamily: 'System',
    fontWeight: '700' as const,
  },
};

export const SIZES = {
  // Global sizes
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,

  // Screen dimensions
  width,
  height,

  // Breakpoints
  isSmallDevice: width < 375,
  isTablet: width >= 600,
};

export const SHADOWS = {
  light: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  dark: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 4,
  },
};

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

const theme = {
  COLORS,
  FONTS,
  SIZES,
  SPACING,
  SHADOWS,
};

export default theme; 