import { KeyboardEvent, memo } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useRef } from 'react';
import { ICheckBoxList } from '@/components/UI/Filters/interfaces';

const CheckBoxList = <T,>({ options, value = null, onChange, onClose, singleSelect = false }: ICheckBoxList<T>) => {
    const optionRefs = useRef<(HTMLDivElement | null)[]>([]);

    const handleChange = (option: T, checked: boolean) => {
        if (singleSelect) {
            onChange(checked ? option : null);
            onClose && onClose();
        } else {
            const currentValue = Array.isArray(value) ? value : [];
            const newValue = checked ? [...currentValue, option] : currentValue.filter((v) => String(v) !== String(option));
            onChange(newValue);
        }
    };

    const isOptionSelected = (option: T) => {
        const optionValue = String(option);
        return singleSelect ? value !== null && String(value as T) === optionValue : Array.isArray(value) && value.some((v) => String(v) === optionValue);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLLabelElement>, option: T, index: number) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleChange(option, !isOptionSelected(option));
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = Math.min(index + 1, options.length - 1);
            optionRefs.current[nextIndex]?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = Math.max(index - 1, 0);
            optionRefs.current[prevIndex]?.focus();
        }
    };

    return (
        <FormGroup sx={{ p: 2 }}>
            {options.map((option, index) => (
                <FormControlLabel
                    key={String(option)}
                    onKeyDown={(e) => handleKeyDown(e, option, index)}
                    ref={(el: HTMLDivElement | null) => (optionRefs.current[index] = el)}
                    control={<Checkbox size="small" checked={isOptionSelected(option)} onChange={(e) => handleChange(option, e.target.checked)} />}
                    label={String(option)}
                />
            ))}
        </FormGroup>
    );
};

export default memo(CheckBoxList);
