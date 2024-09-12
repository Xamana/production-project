import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Comment } from './../../module/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;9.00
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            {comment}
        </div>
    );
});
