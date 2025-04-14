// subjects/os/p1.js
const express = require("express");
const router = express.Router();

// GET /os/p1
router.get("/", (req, res) => {
  const codeString = `
//CREATE


const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("mydatabase");

    const collection = database.collection("mycollection");

    const result = await collection.insertOne({
      name: "John",
      age: 30,
      city: "New York",
    });

    console.log("Document inserted with id:" + result.insertedId);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);




//READ

const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("mydatabase");
    const collection = database.collection("mycollection");

    const documents = await collection.find({}).toArray();

    console.log("Documents:", documents);
  } catch (error) {
    console.error("Error retrieving documents:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);





//UPDATE

const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("mydatabase");
    const collection = database.collection("mycollection");

    const result = await collection.updateMany(
      { name: "John" },
      { $set: { age: 35 } }
    );

    console.log(result.modifiedCount + "documents updated.");
  } catch (error) {
    console.error("Error updating documents:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);





// DELETE

const { MongoClient } = require("mongodb");

async function main() {
  const uri = "mongodb://127.0.0.1:27017";

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db("mydatabase");
    const collection = database.collection("mycollection");

    const result = await collection.deleteMany({ name: "John" });

    console.log(result.deletedCount + "documents deleted.");
  } catch (error) {
    console.error("Error deleting documents:", error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);

`;
  res.json({ code: codeString });
});

module.exports = router;
