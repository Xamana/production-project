import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/AddCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/AddCommentSlice';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const { t } = useTranslation('CommentForm');
    const dispatch = useAppDispatch();

    const commentText = useSelector(getAddCommentFormText);
    const commentError = useSelector(getAddCommentFormError);

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(commentText || '');
        onCommentTextChange('');
    }, [commentText, onCommentTextChange, onSendComment]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                {commentError && <Text text={commentError} theme={TextTheme.ERROR} />}
                <Input
                    className={cls.input}
                    placeholder={t('Введите коментарий')}
                    value={commentText}
                    onChange={onCommentTextChange}
                />
                <Button
                    className={cls.SendButton}
                    onClick={onSendHandler}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Отправить')}
                </Button>
            </div>
        </DynamicModuleLoader>

    );
});

export default AddCommentForm;
