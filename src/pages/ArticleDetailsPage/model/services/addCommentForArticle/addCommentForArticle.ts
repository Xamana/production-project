import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/StoreProvider/config/StateSchema';
import { Comment } from 'entities/Comment';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/module/selectors/articleDetails';
import { addCommentFormActions } from 'features/AddNewComment/model/slices/AddCommentSlice';
import { getAddCommentFormText } from 'features/AddNewComment/model/selectors/AddCommentFormSelectors';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleid/fetchCommentsByArticleid';

export const addCommentForArticle = createAsyncThunk<Comment, void, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (authData, thunkApi) => {
        const {
            extra,
            dispatch,
            rejectWithValue,
            getState,
        } = thunkApi;

        const userData = getUserAuthData(getState());
        const text = getAddCommentFormText(getState());
        const article = getArticleDetailsData(getState());

        if (!userData || !text || !article) {
            throw new Error('Invalid data');
        }
        try {
            // @ts-ignore
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            });

            if (!response.data) {
                throw new Error();
            }

            dispatch(addCommentFormActions.setText(''));
            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    },
);
25:50