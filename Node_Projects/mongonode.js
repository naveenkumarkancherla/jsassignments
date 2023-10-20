import { MongoClient } from 'mongodb';

async function run() {
  const uri = 'mongodb://0.0.0.0:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const dbName = "trustdb";
    const collName = "movies";
    const database = client.db(dbName);
    const collection = database.collection(collName);

    const movies = [
      {
        _id: 1,
        name: 'RRR',
        artist: 'gnanesh',
        director: 'rajamouli',
      },
      {
        _id: 2,
        name: 'Bahubali',
        artist: 'naveen',
        director: 'rajamouli',
      },
      {
        _id: 3,
        name: 'Yama',
        artist: 'knk',
        director: 'rajamouli',
      }
    ];

    const moviesResult = await collection.insertMany(movies);
    console.log(`${moviesResult.insertedCount} movies inserted`);
  } catch (err) {
    console.log(`Something went wrong: ${err.stack}`);
  } finally {
    client.close();
  }
}

run().catch((err) => {
  console.log(`Error: ${err}`);
});
