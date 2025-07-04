'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createPatient, deletePatient, getPatients, updatePatient } from '../services/patientService';

export const usePatients = () => {
    const queryClient = useQueryClient();

    const patientsQuery = useQuery({
        queryKey: ['patients'],
        queryFn: getPatients,
    });

    const createMutation = useMutation({
        mutationFn: createPatient,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['patients'] });
            toast.success('Patient created successfully');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to create patient');
        },
    });

    const updateMutation = useMutation({
        mutationFn: updatePatient,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['patients'] });
            toast.success('Patient updated successfully');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to update patient');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deletePatient,
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ['patients'] });
            toast.success('Patient deleted successfully');
        },
        onError: (error: Error) => {
            toast.error(error.message || 'Failed to delete patient');
        },
    });

    return {
        patients: patientsQuery.data || [],
        isLoading: patientsQuery.isLoading,
        error: patientsQuery.error,
        refetchPatients: patientsQuery.refetch,

        createPatient: createMutation.mutate,
        updatePatient: updateMutation.mutate,
        deletePatient: deleteMutation.mutate,

        isCreating: createMutation.isPending,
        isUpdating: updateMutation.isPending,
        isDeleting: deleteMutation.isPending,

        createError: createMutation.error,
        updateError: updateMutation.error,
        deleteError: deleteMutation.error,
    };
};
