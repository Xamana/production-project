import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, thunkApi) => {
        const { extra, rejectWithValue, getState } = thunkApi;

        const formData = getProfileForm(getState());

        try {
            // @ts-ignore
            const response = await extra.api.put<Profile>('/profile', formData);

            return response.data;
        } catch (error) {
            console.log('a12', error);
            return rejectWithValue('error');
        }
    },
);
