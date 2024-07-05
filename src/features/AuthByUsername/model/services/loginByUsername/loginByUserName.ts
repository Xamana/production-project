import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkExtraArg } from 'app/provider/StoreProvider';
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, { dispatch, extra, rejectWithValue }) => {
        try {
            // @ts-ignore
            const response = await extra.api.post<User>('/login', authData);

            if (!response.data) {
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));
            extra.navigate('/about');

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
