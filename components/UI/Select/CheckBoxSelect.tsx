'use client';

import { memo, useCallback, useState } from 'react';
import { IconButton, Popover } from '@mui/material';
import { ICheckBoxSelect } from '@/components/UI/Select/interfaces';
import CheckBoxList from '@/components/UI/Filters/CheckBoxList';
import { ArrowDropUp, ArrowDropDown } from '@/components/UI/Icons/Icons';

const CheckBoxSelect = <T,>({ options, value = [], onChange, singleSelect = false }: ICheckBoxSelect<T>) => {
    const [filterAnchorEl, setFilterAnchorEl] = useState<null | HTMLElement>(null);

    const onClose = useCallback(() => {
        setFilterAnchorEl(null);
    }, []);

    return (
        <>
            <IconButton size="small" onClick={(e) => setFilterAnchorEl(e.currentTarget)} className="!p-0" disableRipple>
                {filterAnchorEl ? <ArrowDropDown tabIndex={2} /> : <ArrowDropUp tabIndex={2} />}
            </IconButton>
            <Popover
                open={!!filterAnchorEl}
                anchorEl={filterAnchorEl}
                onClose={onClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
                <CheckBoxList options={options} value={value} onChange={onChange as any} onClose={onClose} singleSelect={singleSelect} />
            </Popover>
        </>
    );
};

export default memo(CheckBoxSelect);
