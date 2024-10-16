import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton';
import { Text } from 'shared/ui/Text';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Comment } from '../../module/types/comment';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Comment[];
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            { comments?.length
                ? comments.map((comment) => (
                    <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} />
                ))
                : <Text text={t('Коментов не найденно')} />}
        </div>
    );
});
