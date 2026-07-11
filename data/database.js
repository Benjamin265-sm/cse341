const dotenv = require('dotenv');
dotenv.config();

const MongoClient = require('mongodb').MongoClient;

let database;

const validateMongoUrl = (uri) => {
    if (!uri) {
        return 'Missing MONGODB_URL environment variable';
    }

    if (/db_password|<[^>]+>/.test(uri)) {
        return 'MONGODB_URL contains a placeholder value. Replace it with your real Atlas connection string.';
    }

    return null;
};

const initDb = (callback) => {
    if (database) {
        console.log('Database is already initialized!');
        return callback(null, database);
    }

    const validationError = validateMongoUrl(process.env.MONGODB_URL);
    if (validationError) {
        return callback(new Error(validationError));
    }

    MongoClient.connect(process.env.MONGODB_URL, {
        serverSelectionTimeoutMS: 10000,
    }).then((client) => {
        database = client;
        callback(null, database);
    }).catch((err) => {
        callback(err);
    });
};

const getDatabase = () => {
    if (!database) {
        throw Error('Database not initialized');
    }
    return database;
};

module.exports = { initDb, getDatabase, validateMongoUrl };