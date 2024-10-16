import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/provider/ThemProvider';
import { Text } from 'shared/ui/Text';
import { Card } from './Card';

const meta = {
    title: 'shared/Card',
    component: Card,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LIGHT: Story = {
    args: {
        children: <Text title="test" text="test text" />,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.LIGHT}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const Dark: Story = {
    args: {
        children: <Text title="test" text="test text" />,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.DARK}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};

export const Gray: Story = {
    args: {
        children: <Text title="test" text="test text" />,
    },
    decorators: [
        (Story) => (
            <ThemeDecorator theme={Theme.GRAY}>
                <Story />
            </ThemeDecorator>
        ),
    ],
};
