import { createContext, useContext } from 'react';
import { COLORS } from '../styles/theme';

export type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: typeof COLORS.light | typeof COLORS.dark;
};

export const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
  colors: COLORS.light,
});

export const useTheme = () => useContext(ThemeContext); 