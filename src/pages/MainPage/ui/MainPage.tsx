import { BugButton } from 'app/provider/ErrorBoundary';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';

const MainPage = () => {
    const { t } = useTranslation('MainPage');
    const [value, setValue] = useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div style={{ color: 'white' }}>
            {t('О сайте')}
            <Input
                onChange={onChange}
                value={value}
            />
            <BugButton />
        </div>
    );
};

export default MainPage;
