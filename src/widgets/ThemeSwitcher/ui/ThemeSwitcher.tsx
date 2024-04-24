import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/provider/ThemProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button';


interface ThemeSwitcherProps {
    className?: string; 
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toogleTheme} = useTheme();
    return (
        <Button 
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toogleTheme}
        >
            {theme === Theme.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>
    );
}