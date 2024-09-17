import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
    text: undefined,
    error: undefined,
};

export const addCommentSlice = createSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },

    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(addCommentForArticle.pending, (state, _) => {
    //             state.error = undefined;
    //         })
    //         .addCase(addCommentForArticle.fulfilled, (state, action) => {
    //             state.text = action.payload.text;
    //         })
    //         .addCase(addCommentForArticle.rejected, (state, action) => {
    //             state.error = action.payload;
    //         });
    // },
});

// Action creators are generated for each case reducer function
export const { actions: addCommentFormActions } = addCommentSlice;
export const { reducer: addCommentFormReducer } = addCommentSlice;
