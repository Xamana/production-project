import React, { Suspense } from 'react';
import 'app/styles/index.scss';
import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

interface Props {
    children?: React.ReactNode;

}
export const TranslationDecorator = ({ children }:Props) => (
    <I18nextProvider i18n={i18n}>
        <Suspense fallback="">
            {children}
        </Suspense>
    </I18nextProvider>
);
