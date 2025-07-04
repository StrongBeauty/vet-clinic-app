'use client';

import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ChangeEvent, memo, useEffect, useState } from 'react';
import { ITextFilter } from '@/components/UI/Filters/interfaces';

const TextFilter = <TData,>({ column }: ITextFilter<TData>) => {
    const [value, setValue] = useState<string>((column.getFilterValue() as string) || '');

    useEffect(() => {
        setValue((column.getFilterValue() as string) || '');
    }, [column]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        column.setFilterValue(newValue);
    };

    return (
        <TextField
            value={value}
            onChange={handleChange}
            variant="outlined"
            slotProps={{
                input: {
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon fontSize="small" />
                        </InputAdornment>
                    ),
                },
                htmlInput: {
                    tabIndex: 3,
                },
            }}
            sx={{
                '& .MuiOutlinedInput-root': {
                    height: 32,
                    paddingRight: 1,
                },
                width: 150,
            }}
        />
    );
};

export default memo(TextFilter);
