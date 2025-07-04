import { MongoClient, MongoClientOptions } from 'mongodb';

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI is not set in .env.local');
}

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {
    maxPoolSize: 100,
    serverSelectionTimeoutMS: 5000,
};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    var _mongoClientPromise: Promise<MongoClient>;
}

try {
    if (process.env.NODE_ENV === 'development') {
        if (!global._mongoClientPromise) {
            client = new MongoClient(uri, options);
            global._mongoClientPromise = client.connect().catch((err) => {
                throw err;
            });
        }
        clientPromise = global._mongoClientPromise;
    } else {
        client = new MongoClient(uri, options);
        clientPromise = client.connect();
    }
} catch (err) {
    throw err;
}

export default clientPromise;
