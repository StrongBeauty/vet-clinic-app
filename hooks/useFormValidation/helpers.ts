import { IPatient } from '../../interfaces/interfaces';
import { IFormField } from '@/components/UI/Modal/interfaces';

export const validateField = (field: IFormField, value: any) => {
    if (field.required && !value) {
        return field.errorMessage || 'Required field';
    }
    if (field.pattern && value && !field.pattern.test(value)) {
        return field.errorMessage || 'Invalid format';
    }
    return '';
};

export const areAllFieldsEmpty = (formData: IPatient) => {
    return Object.values(formData).every((val) => !val);
};

export const hasValidationErrors = (errors: Record<string, string>) => {
    return Object?.values(errors).some((error) => !!error);
};

export const areRequiredFieldsFilled = (formData: IPatient, actionFormFields: IFormField[]) => {
    return actionFormFields?.every((field) => {
        if (field?.required) {
            const key = field.name as keyof IPatient;
            return !!formData[key];
        }
        return true;
    });
};
