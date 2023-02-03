import { MongoClient } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
}

declare module 'mongodb' {
  interface MongoClientOptions {
    [key: string]: any;
  }
}
