'use client';

import { FC } from 'react';
import { ITitle } from '@/components/UI/Titles/interfaces';

const Title: FC<ITitle> = ({ title }) => {
    return <h1 className="text-primary font-bold text-3xl">{title}</h1>;
};

export default Title;
