/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Text, TextTheme } from './Text';

const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const withTitleAndText: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
};

export const onlyTitle: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
};

export const onlyText: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
};

export const withTitleAndTextDark: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTitleDark: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const onlyTextDark: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const Error: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
        theme: TextTheme.ERROR,
    },
};

export const ErrorDark: Story = {
    args: {
        title: 'lorem ipsum dolor sit amet',
        text: 'Lorem Ipsum Ipsum Ipsum Ipsum Ips',
        theme: TextTheme.ERROR,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
