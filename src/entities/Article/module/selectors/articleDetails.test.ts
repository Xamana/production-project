import { StateSchema } from 'app/provider/StoreProvider';
import {
    getArticleDetailsData,
    getArticleDetailsIsLoading,
    getArticleDetailsError,
} from './articleDetails';

describe('articleDetails.test', () => {
    test('should with data', () => {
        const data = {
            id: '1',
            title: 'Test Title',
        };
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toBe(data);
    });
    test('should with empty state', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
            },
        };
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined);
    });
    test('should with isloading data', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true);
    });
    test('should without isloading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {},
        };
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false);
    });
    test('should be with error', () => {
        const error = 'error';
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error,
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe(error);
    });

    test('should be without error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
            },
        };
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined);
    });
});
