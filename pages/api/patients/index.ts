import type { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/db';

const DB_NAME = 'pet_clinic';
const COLLECTION_NAME = 'patients';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const client = await clientPromise;
    const db = client.db(DB_NAME);
    const collection = db.collection(COLLECTION_NAME);

    try {
        switch (req.method) {
            case 'GET': {
                const patients = await collection.find({}).toArray();
                return res.status(200).json(patients);
            }
            case 'POST': {
                const patientData = req.body;
                const result = await collection.insertOne({
                    ...patientData,
                    createdAt: new Date(),
                });
                const createdPatient = await collection.findOne({ _id: result.insertedId });

                return res.status(201).json(createdPatient);
            }
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (err: any) {
        return res.status(500).json({ message: err.message || 'Server error' });
    }
}
