import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import {
    profileActions,
    ProfileSchema,
    profileReducer,
    updateProfileData,
} from 'entities/Profile';
import { ValidateProfileError } from '../types/profile';

const data = {
    username: 'admin',
    age: 22,
    country: Country.Russia,
    lastname: 'admin',
    city: 'asd',
    currency: Currency.EUR,
    first: 'asd',
};
describe('loginSlice.test', () => {
    test('test set Readonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: true };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(false),
        )).toEqual({ readonly: false });
    });

    test('cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: undefined };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: undefined };

        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123',
            }),
        )).toEqual({
            form: { username: '123' },
        });
    });

    test('updateProfile service pending', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: false, validateErrors: [ValidateProfileError.INCORRECT_AGE] };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('updateProfile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = { isLoading: true, validateErrors: undefined };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });
});
