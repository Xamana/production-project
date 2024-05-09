/** @format */

import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
    stories: ['../../src/**/*.mdx', '../../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-webpack5-compiler-swc',
        '@storybook/addon-onboarding',
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@chromatic-com/storybook',
        '@storybook/addon-interactions',
        '@storybook/addon-webpack5-compiler-babel',
        '@storybook/addon-jsx',

    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {
            builder: {
            },
        },
    },
    docs: {
        autodocs: 'tag',
    },
};

export default config;
