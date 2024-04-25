import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('MainPage');
    return (
        <div>
            {t('О сайте')}
        </div>
    );
};

export default MainPage;
