/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
    args: { onClick: fn() },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        to: '/',
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
};
export const Secondary: Story = {
    args: {
        to: '/',
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
};
export const PrimaryDark: Story = {
    args: {
        to: '/',
        children: 'text',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
export const SecondaryDark: Story = {
    args: {
        to: '/',
        children: 'text',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
