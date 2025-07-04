// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiClient } from '@/lib/api/client';
import { IPatient } from '../interfaces/interfaces';
import { ObjectId } from 'mongodb';

export interface IPatientRequest {
    _id: ObjectId;
    updateData: Partial<IPatient>;
}

export const getPatients = async (): Promise<IPatient[]> => {
    return apiClient<IPatient[]>('/patients');
};

export const createPatient = async (patient: Omit<IPatient, 'id'>): Promise<IPatient> => {
    return apiClient<IPatient>('/patients', { method: 'POST', body: patient });
};

export const updatePatient = async ({ _id, updateData }: IPatientRequest): Promise<void> => {
    return apiClient<void>(`/patients/${_id}`, { method: 'PATCH', body: updateData });
};

export const deletePatient = async (id: ObjectId): Promise<void> => {
    return apiClient<void>(`/patients/${id}`, { method: 'DELETE' });
};
