import React, { FC } from 'react';
import 'app/styles/index.scss';
import { StateSchema, StoreProvider } from 'app/provider/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';
import { articleDetailsReducer } from 'entities/Article';

interface Props {
    children?: React.ReactNode;
    state?: DeepPartial<StateSchema>
}

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
};

export const StoreDecorator = ({ children, state }:Props, asyncReducers: ReducersList) => (
    <StoreProvider initialState={state} asyncRedusers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        {children}
    </StoreProvider>
);
