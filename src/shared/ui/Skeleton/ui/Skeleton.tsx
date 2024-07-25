import {
    CSSProperties,
    memo,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Skeleton.module.scss';

export interface SkeletonOption {
    value: string;
    content: string;
}

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const {
        className,
        height,
        width,
        border,
    } = props;

    const mods: Mods = {};

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.Skeleton, mods, [className])} style={styles} />
    );
});
