import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemResult {
    toogleTheme?: () => void;
    theme: Theme;
}

export const useTheme = (): UseThemResult => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toogleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
        case Theme.DARK:
            newTheme = Theme.GRAY;
            break;
        case Theme.GRAY:
            newTheme = Theme.LIGHT;
            break;
        case Theme.LIGHT:
            newTheme = Theme.DARK;
            break;
        default:
            newTheme = Theme.LIGHT;
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        document.body.className = newTheme;
    };
    return {
        theme: theme || Theme.LIGHT,
        toogleTheme,
    };
};
