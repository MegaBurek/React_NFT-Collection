import { createContext } from 'react';

//Types
import { ThemeContextType } from "@/@types/components/ThemeProvider"

const ThemeContext = createContext<ThemeContextType | null>(null);
ThemeContext.displayName = 'ThemeContext';

export default ThemeContext
