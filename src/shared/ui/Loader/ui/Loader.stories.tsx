/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Loader } from './Loader';

const meta = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
    args: { onClick: fn() },
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
