import React, { FC, StrictMode } from 'react';

interface Props {
    children?: React.ReactNode;
}

const ReactDecorator: FC<Props> = ({ children }) => (
    <StrictMode>
        { children }
    </StrictMode>
);
export default ReactDecorator;
