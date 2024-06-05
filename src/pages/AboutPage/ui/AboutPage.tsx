// import { Counter } from 'entities/Counter';
import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('AboutPage');

    return (
        <div>
            {t('О сайте')}
            {/* <Counter /> */}
        </div>
    );
};

export default AboutPage;
