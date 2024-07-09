import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemResult {
    toogleTheme?: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };
    return {
        theme: theme || Theme.LIGHT,
        toogleTheme,
    };
};
