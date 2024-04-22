import React from 'react';

type Mods = Record<string, boolean | string>


export const classNames = (cls: string, mods: Mods, additional: string[]):string => {
    return [
        cls,
        ...additional,
        Object.entries(mods)
            .filter((className, value) => Boolean(value))
            .map((className, value) => className)
    ].join(' ')
}


