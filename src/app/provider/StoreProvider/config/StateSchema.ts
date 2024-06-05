import { UserSchema } from 'entities/User';

export interface CounterState {
    value: number;
}

export interface StateSchema {
    counter: CounterState;
    user: UserSchema
}
