import React, { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve, reject) => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 500);
}));
