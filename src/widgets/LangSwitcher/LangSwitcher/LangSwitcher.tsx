import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss'
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { ButtonTheme } from 'shared/ui/Button';

interface LangSwitcherProps {
    className?: string; 
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const togleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }


    return (
        <Button 
            onClick={togleLang}
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.LangSwitcher, {}, [className])}
        >
            {t("Язык")}
        </Button>
    );
}
