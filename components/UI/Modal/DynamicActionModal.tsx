import dynamic from 'next/dynamic';
import { ComponentLoader } from '@/components/UI/Loaders/ComponentLoader';

const DynamicActionModal = dynamic(() => import('@/components/UI/Modal/ActionModal'), {
    loading: () => (
        <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            <ComponentLoader />
        </div>
    ),
    ssr: false,
});

export default DynamicActionModal;
