/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Skeleton } from './Skeleton';

const meta = {
    title: 'shared/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
    args: undefined,
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Circle: Story = {
    args: {
        width: '100px',
        height: '100px',
        border: '50%',
    },
};

export const NormalDark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const CircleDark: Story = {
    args: {
        width: '100px',
        height: '100px',
        border: '50%',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const NormalGray: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.GRAY}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const CircleGray: Story = {
    args: {
        width: '100px',
        height: '100px',
        border: '50%',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.GRAY}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
