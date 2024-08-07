import type { Meta, StoryObj } from '@storybook/react';
import ArticlesPage from './ArticlesPage';

const meta = {
    title: 'page/ArticlesPage',
    component: ArticlesPage,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    //   argTypes: {
    //     backgroundColor: 'red',
    //   },
    args: undefined,
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
    },
};
