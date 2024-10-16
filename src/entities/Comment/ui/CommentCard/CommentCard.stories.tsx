// /** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { CommentCard } from './CommentCard';

const meta = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment = {
    id: '1',
    text: 'hello world',
    user: { id: '1', username: 'Vasya' },
};

export const Light: Story = {
    args: {
        comment,
    },
};
export const Dark: Story = {
    args: {
        comment,
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
        comment,
        isLoading: true,
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
