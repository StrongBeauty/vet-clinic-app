'use client';

import { useEffect, FC, memo, useMemo } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton } from '@mui/material';
import { IActionModal } from '@/components/UI/Modal/interfaces';
import { actionFormFields } from 'const/fields';
import { FormFieldRenderer } from '@/components/UI/Modal/FormFieldRenderer';
import { Delete } from '@/components/UI/Icons/Icons';
import { deepEqualObj } from 'hooks/helpers';
import { useFormValidation } from 'hooks/useFormValidation/useFormValidation';
import { IPatient } from 'interfaces/interfaces';

const ActionModal: FC<IActionModal> = ({ open, onClose, onSave, onDelete, data, title, titleIcon }) => {
    const { formData, errors, handleChange, isFormValid, setFormData } = useFormValidation(actionFormFields, data);

    useEffect(() => {
        setFormData(data || ({} as IPatient));
    }, [data, setFormData]);

    const isSaveDisabled = useMemo(() => {
        return !isFormValid() || deepEqualObj(data, formData);
    }, [data, formData, isFormValid]);

    const fieldsToRender = useMemo(
        () => actionFormFields.map((field) => <FormFieldRenderer key={field.name} field={field} formData={formData} handleChange={handleChange} errors={errors} />),
        [formData, errors, handleChange],
    );

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
            <DialogTitle className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center text-lg font-semibold text-gray-900">
                    {titleIcon && <span className="mr-3 text-blue-600">{titleIcon}</span>}
                    {title}
                </div>
                {onDelete ? (
                    <IconButton onClick={() => onDelete()}>
                        <Delete color="error" />
                    </IconButton>
                ) : (
                    <></>
                )}
            </DialogTitle>
            <DialogContent className="px-6 py-4">{fieldsToRender}</DialogContent>
            <DialogActions>
                <div className="flex justify-between w-full px-6 py-4 space-x-8">
                    <Button onClick={onClose} variant="contained" color="secondary" fullWidth className="bg-gray-300 hover:bg-gray-400 text-gray-900 shadow-md rounded-md px-6 py-2 font-semibold">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => onSave(formData)}
                        disabled={isSaveDisabled}
                        variant="contained"
                        fullWidth
                        color="primary"
                        className="bg-blue-600 hover:bg-blue-700 shadow-md rounded-md px-6 py-2 font-semibold disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                        Save
                    </Button>
                </div>
            </DialogActions>
        </Dialog>
    );
};

export default memo(ActionModal);
