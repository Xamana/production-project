// /** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { CommentList } from './CommentList';

const meta = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments = [
    {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    {
        id: '2',
        text: 'hello world again',
        user: { id: '1', username: 'not Vasya' },
    },
];

export const Light: Story = {
    args: {
        comments,
    },
};
export const Dark: Story = {
    args: {
        comments,
    },
    decorators: [
        (Story) => (
            <StoreDecorator>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        (Story) => (
            <StoreDecorator>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};

export const Error: Story = {
    args: {
    },
    decorators: [
        (Story) => (
            <StoreDecorator state={{ loginForm: { error: 'Error' } }}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};
