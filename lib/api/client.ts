import { IRequestOptions } from '@/lib/api/interfaces';

export async function apiClient<T>(endpoint: string, options: IRequestOptions = {}): Promise<T> {
    const response = await fetch(`/api${endpoint}`, {
        method: options.method || 'GET',
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Request failed');
    }

    return response.json();
}
