import { StateSchema } from 'app/provider/StoreProvider';

export const getProfileValidateErrors = (state: StateSchema) => state.profile?.validateErrors;
