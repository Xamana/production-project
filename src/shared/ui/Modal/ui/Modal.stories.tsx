/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Modal } from './Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dark: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil maxime quas exercitationem! Commodi magni consectetur facilis soluta, modi ab est. Fugit quia aut suscipit quaerat. Sint perspiciatis quasi maxime voluptates',
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
export const Light: Story = {
    args: {
        children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nihil maxime quas exercitationem! Commodi magni consectetur facilis soluta, modi ab est. Fugit quia aut suscipit quaerat. Sint perspiciatis quasi maxime voluptates',
        isOpen: true,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
