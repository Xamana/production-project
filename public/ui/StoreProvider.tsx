/** @format */

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '../../src/app/provider/StoreProvider/config/store';
import { StateSchema } from '../../src/app/provider/StoreProvider/config/StateSchema';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const { children, initialState, asyncRedusers } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
        initialState as StateSchema,
        asyncRedusers as ReducersMapObject<StateSchema>,
        navigate,
    );

    return <Provider store={store}>{children}</Provider>;
};
