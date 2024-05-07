/** @format */

import React, { FC } from 'react';
import 'app/styles/index.scss';
import { Theme } from 'app/provider/ThemProvider';

interface Props {
    children?: React.ReactNode;
    theme: Theme;
}
const ThemeDecorator: FC<Props> = ({ children, theme }) => (
    <div className={`app ${theme}`}>{children}</div>
);
export default ThemeDecorator;
