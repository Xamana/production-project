import React, { lazy } from 'react';

export const MainPageAsunc = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./MainPage')), 500);
}));
