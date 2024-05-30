import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18nForTests from 'shared/config/i18n/i18nForTests';

export interface renderWithRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export function componentRouter(component: ReactNode, options: renderWithRouterOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;

    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
        ,
    );
}
