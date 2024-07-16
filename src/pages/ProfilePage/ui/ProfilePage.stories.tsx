/** @format */

import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/storybook.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
    title: 'page/ProfilePage',
    component: ProfilePage,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

const state = {
    profile: {
        form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'admin',
            city: 'asd',
            currency: Currency.EUR,
            first: 'asd',
            avatar,
        },
    },
};

export const Light: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <StoreDecorator state={state}>
                    <Story />
                </StoreDecorator>
            </ThemeDecorator>
        ),
    ],
};
export const Dark: Story = {
    args: {},
    decorators: [
        (Story) => (
            <StoreDecorator state={state}>
                <ThemeDecorator theme={Theme.DARK}>
                    <Story />
                </ThemeDecorator>
            </StoreDecorator>
        ),
    ],
};
