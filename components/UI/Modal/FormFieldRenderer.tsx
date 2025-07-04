'use client';

import { ChangeEvent, FC, useCallback } from 'react';
import { TextField } from '@mui/material';
import { IFormFieldRenderer } from '@/components/UI/Modal/interfaces';
import { petTypes } from 'const/common';
import CheckBoxSelect from '@/components/UI/Select/CheckBoxSelect';
import { Fragment } from '@emotion/react/jsx-runtime';

export const FormFieldRenderer: FC<IFormFieldRenderer> = ({ field, formData, handleChange, errors }) => {
    const textFieldClasses = `
    [&_.MuiOutlinedInput-root]:h-8     
    [&_.MuiInputBase-root]:w-full       
    [&_.MuiOutlinedInput-input]:py-1.5  
    [&_.MuiSelect-select]:min-w-0
    ${errors[field.name] ? '[&_.MuiOutlinedInput-notchedOutline]:border-red-500' : ''}
  `;

    const commonTextFieldProps = {
        size: 'small' as const,
        value: formData[field.name] || '',
        onChange: (e: ChangeEvent<HTMLInputElement>) => handleChange(field.name, e.target.value),
        variant: 'outlined' as const,
        error: !!errors[field.name],
        helperText: errors[field.name],
        className: textFieldClasses,
        slotProps: {
            input: {
                className: 'py-1.5 text-sm',
            },
        },
    };
    const today = new Date().toISOString().split('T')[0];
    const dateFieldProps = {
        type: 'date',
        inputProps: {
            max: today,
        },
        placeholder: '',
        slotProps: {
            inputLabel: { shrink: true },
        },
    };

    const handlePetTypeChange = useCallback(
        (value: any) => {
            handleChange('petType', value);
        },
        [handleChange],
    );

    return (
        <div key={field.name} className="mb-4 flex items-center">
            <label className="w-4/12 text-sm font-medium text-gray-700">
                {field.label}
                {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>

            <div className="w-8/12">
                {field.type === 'date' ? (
                    <TextField {...commonTextFieldProps} {...dateFieldProps} />
                ) : field.type === 'select' ? (
                    <Fragment>
                        {formData[field.name]}
                        <CheckBoxSelect options={petTypes} value={formData[field.name] || ''} onChange={handlePetTypeChange} singleSelect />
                    </Fragment>
                ) : (
                    <TextField {...commonTextFieldProps} type={field.type} required={field.required} tabIndex={2} />
                )}
            </div>
        </div>
    );
};
