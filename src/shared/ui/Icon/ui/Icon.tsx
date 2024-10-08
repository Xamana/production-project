import { classNames } from 'shared/lib/classNames/classNames';

import React, { memo } from 'react';
import cls from './Icon.module.scss';

interface IconProps {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo(({ className, Svg }: IconProps) => {
    const mods = {};

    return (
        <Svg className={classNames(cls.Icon, mods, [className])} />
    );
});
