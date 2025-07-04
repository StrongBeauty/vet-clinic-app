import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/db';

const DB_NAME = 'pet_clinic';
const COLLECTION_NAME = 'patients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {
        query: { id },
        method,
        body,
    } = req;

    if (!id || typeof id !== 'string' || !ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }

    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    try {
        switch (method) {
            case 'PATCH': {
                const updateResult = await collection.updateOne({ _id: new ObjectId(id) }, { $set: { ...body, updatedAt: new Date() } });
                if (updateResult.matchedCount === 0) {
                    return res.status(404).json({ message: 'Patient not found' });
                }
                return res.status(200).json({ message: 'Patient updated' });
            }
            case 'DELETE': {
                const deleteResult = await collection.deleteOne({ _id: new ObjectId(id) });
                if (deleteResult.deletedCount === 0) {
                    return res.status(404).json({ message: 'Patient not found' });
                }
                return res.status(200).json({ message: 'Patient deleted' });
            }
            default:
                res.setHeader('Allow', ['GET', 'PATCH', 'DELETE']);
                return res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message || 'Internal server error' });
    }
}
