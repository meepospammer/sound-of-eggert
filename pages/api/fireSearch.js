import { MongoClient } from "mongodb";
import clientPromise from "../../lib/mongodb"



export default async function handler (req, res) {

    const mongoClient = await clientPromise;
    await mongoClient.connect();

    const db = mongoClient.db("sound_of_eggert_db")
    const posts = db.collection("posts");

    const data = req.body
    /// destructure the strin in the search query


    const document = {
        'queryText': data.text
    }

    //// add data aggregation call

    const agg = [
        {
          $search: {
            text: {
              query: document.queryText,
              path: "**",
            },
          },
        },

        {
      
          $limit: 5,
      
        }
    ]

    const cursor = await posts.aggregate(agg);

    const searchResults = await cursor.toArray();



    /// all good!

    res.status(200).send();

    res.status(200).json(JSON.stringify(searchResults));



}