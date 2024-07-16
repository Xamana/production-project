import { StateSchema } from 'app/provider/StoreProvider';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
    test('should return validateErrors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
    test('should withuot validateErrors', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
