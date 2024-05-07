import React, { FC } from 'react';
import 'app/styles/index.scss';

interface Props {
    children?: React.ReactNode;
}

const StyleDecorator: FC<Props> = ({ children }) => <div>{children}</div>;
export default StyleDecorator;
