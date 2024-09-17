/** @format */

import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton';
import { Avatar } from 'shared/ui/Avatar';
import { Text } from 'shared/ui/Text';
import { AppLink } from 'shared/ui/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../module/types/comment';

import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <>
                <div className={classNames(cls.CommentCard, {}, [className])}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height="30px" width="30px" />
                        <Skeleton height="14px" width="70px" className={cls.username} />
                    </div>
                    <Skeleton className={cls.text} height="14px" width="300px" />
                </div>
                <div className={classNames(cls.CommentCard, {}, [className])}>
                    <div className={cls.header}>
                        <Skeleton border="50%" height="30px" width="30px" />
                        <Skeleton className={cls.username} height="14px" width="70px" />
                    </div>
                    <Skeleton className={cls.text} height="14px" width="300px" />
                </div>
            </>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={cls.header}>
                {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});
