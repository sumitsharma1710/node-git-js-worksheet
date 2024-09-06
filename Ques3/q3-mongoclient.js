const {MongoClient} = require('mongodb');
const dbName = 'sampleDB';
const collectionName = 'sampleDoc';
const client = new MongoClient('mongodb://127.0.0.1:27017/');

async function run() {
  try {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = await collection.find({}).toArray();
    documents.forEach(doc => {
      console.log(doc);
    });

  } catch (err) {
    console.error('An error occurred:', err);
  } finally {
    await client.close();
    console.log('Connection closed');
  }
}
run();

