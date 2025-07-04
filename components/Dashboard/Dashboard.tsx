'use client';

import { FC, useCallback, useMemo, useState } from 'react';
import { IPatient } from 'interfaces/interfaces';
import { usePatients } from 'hooks/usePatients';
import { useDebounce } from 'hooks/useDebounce';
import DashboardContainer from '@/components/UI/Containers/DashboardContainer';
import FetchStatus from '@/components/UI/Containers/FetchStatus';
import { filterPatients } from '@/components/Dashboard/helpers/patientHelpers';
import ActionModal from '@/components/UI/Modal/ActionModal';
import PatientTable from '@/components/Table/PatientTable';
import { Add, Edit } from '@/components/UI/Icons/Icons';
import Title from '@/components/UI/Titles/Title';

/**
 * Main dashboard component for Pet Clinic application
 */
export const Dashboard: FC = () => {
    // State management
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPatient, setCurrentPatient] = useState<IPatient | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Data fetching
    const { patients, isLoading, error, createPatient, updatePatient, deletePatient } = usePatients();

    // Search with debounce
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    // Filter patients
    const filteredPatients = useMemo(() => filterPatients(patients, debouncedSearchTerm), [patients, debouncedSearchTerm]);

    // Handlers
    const handleOpenModal = useCallback((patient?: IPatient) => {
        setCurrentPatient(patient || null);
        setIsModalOpen(true);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setCurrentPatient(null);
    }, []);
    const handleSavePatient = useCallback(
        async (patient: IPatient) => {
            if (currentPatient) {
                const { _id, ...rest } = patient;
                await updatePatient({ _id: _id!, updateData: rest });
            } else {
                await createPatient(patient);
            }
            handleCloseModal();
        },
        [currentPatient, updatePatient, createPatient, handleCloseModal],
    );

    const handleDeletePatient = useCallback(async () => {
        if (currentPatient?._id) {
            await deletePatient(currentPatient._id);
            handleCloseModal();
        }
    }, [currentPatient, deletePatient, handleCloseModal]);

    return (
        <FetchStatus isLoading={isLoading} error={error}>
            <DashboardContainer>
                <div className="flex items-center justify-between mb-4">
                    <Title title="Pet Clinic Dashboard" />
                    <button
                        tabIndex={1}
                        onClick={() => handleOpenModal()}
                        className="mt-4 mb-6 inline-flex items-center gap-2 rounded-md bg-primary text-white px-4 py-2 text-sm font-semibold shadow-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        <Add className="h-4 w-4" />
                        Add patient
                    </button>
                </div>
                <PatientTable data={filteredPatients} handleOpenModal={handleOpenModal} searchTerm={searchTerm} onSearchChange={setSearchTerm} />
                {isModalOpen ? (
                    <ActionModal
                        open={isModalOpen}
                        data={currentPatient}
                        onClose={handleCloseModal}
                        onSave={handleSavePatient}
                        title={currentPatient ? 'Edit patient' : 'Add patient'}
                        titleIcon={currentPatient ? <Edit /> : <Add />}
                        onDelete={currentPatient ? handleDeletePatient : undefined}
                    />
                ) : (
                    <></>
                )}
            </DashboardContainer>
        </FetchStatus>
    );
};
