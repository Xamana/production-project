import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
        console.log('refreshPage');
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Ошибка приложения')}</p>
            <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
        </div>
    );
};
