import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface CounterState {
    value: number;
}

export interface StateSchema {
    counter: CounterState;
    user: UserSchema;
    loginForm?: LoginSchema;
}
