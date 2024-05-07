import { lazy } from 'react';

export const MainPageAsunc = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 500);
}));
