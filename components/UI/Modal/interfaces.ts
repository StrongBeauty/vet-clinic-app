import { IPatient } from 'interfaces/interfaces';
import { ObjectId } from 'mongodb';
import { ReactElement } from 'react';

export interface IActionModal {
    open: boolean;
    onClose: () => void;
    onSave: (patient: IPatient) => void;
    onDelete?: ((_id?: ObjectId) => void) | undefined;
    data?: IPatient | null;
    title?: string;
    titleIcon?: ReactElement;
}

export interface IFormField {
    name: string;
    label: string;
    type: 'text' | 'number' | 'select' | 'date';
    options?: string[];
    required?: boolean;
    pattern?: RegExp;
    errorMessage?: string;
}

export interface IFormFieldRenderer {
    field: IFormField;
    formData: Record<string, any>;
    handleChange: (fieldName: string, value: any) => void;
    errors: Record<string, string>;
}
