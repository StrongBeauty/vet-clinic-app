'use client';

import { useCallback, useState } from 'react';
import { IPatient } from 'interfaces/interfaces';
import { IFormField } from '@/components/UI/Modal/interfaces';
import { areAllFieldsEmpty, areRequiredFieldsFilled, hasValidationErrors, validateField } from './helpers';

export const useFormValidation = (actionFormFields: IFormField[], initialData?: IPatient | null) => {
    const [formData, setFormData] = useState<IPatient>(initialData || ({} as IPatient));
    const [errors, setErrors] = useState({});

    const handleChange = useCallback(
        (fieldName: string, value: any) => {
            setFormData((prev) => ({ ...prev, [fieldName]: value }));

            const field = actionFormFields.find((f) => f.name === fieldName);
            const error = field && validateField(field, value);

            setErrors((prev) => ({
                ...prev,
                [fieldName]: error,
            }));
        },
        [actionFormFields],
    );

    const isFormValid = () => {
        return !areAllFieldsEmpty(formData) && !hasValidationErrors(errors) && areRequiredFieldsFilled(formData, actionFormFields);
    };

    return { formData, errors, handleChange, isFormValid, setFormData, setErrors };
};
