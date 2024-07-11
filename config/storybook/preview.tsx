/** @format */

import * as React from 'react';
import type { Preview } from '@storybook/react';
import StyleDecorator from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import ReactDecorator from '../../src/shared/config/storybook/ReactDecorator/ReactDecorator';
import { StoreDecorator } from '../../src/shared/config/storybook/StoreDecorator/StoreDecorator';
import { TranslationDecorator } from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator';
import { Theme } from '../../src/app/provider/ThemProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ReactDecorator>
                <TranslationDecorator>
                    <RouterDecorator>
                        <StoreDecorator>
                            <ThemeDecorator theme={Theme.LIGHT}>
                                <StyleDecorator>
                                    <Story />
                                </StyleDecorator>
                            </ThemeDecorator>
                        </StoreDecorator>
                    </RouterDecorator>
                </TranslationDecorator>
            </ReactDecorator>
        ),
    ],
};

export default preview;
