import React, { FC } from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

interface Props {
    children?: React.ReactNode;
    state?: DeepPartial<StateSchema>
}

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
};

export const StoreDecorator = ({ children, state }:Props, asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>) => (
    <StoreProvider initialState={state} asyncRedusers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        {children}
    </StoreProvider>
);
