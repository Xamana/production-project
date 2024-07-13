/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { Avatar } from './Avatar';

const meta = {
    title: 'shared/Avatar',
    component: Avatar,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
    args: undefined,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        src: AvatarImg,
        alt: 'аватар не доступен',
        size: 150,
    },
};

export const Small: Story = {
    args: {
        src: AvatarImg,
        alt: 'аватар не доступен',
        size: 50,
    },
};
