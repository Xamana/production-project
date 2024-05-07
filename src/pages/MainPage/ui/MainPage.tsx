import { BugButton } from 'app/provider/ErrorBoundary';
import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('MainPage');
    return (
        <div>
            {t('О сайте')}
            <BugButton />
        </div>
    );
};

export default MainPage;
