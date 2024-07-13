import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Country } from 'entities/Country';
import avatar from 'shared/assets/tests/storybook.png';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalLight: Story = {
    args: {
        data: {
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

export const NormalDark: Story = {
    args: {
        data: {
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
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const withError: Story = {
    args: {
        error: 'Error',
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
