import clientPromise from "../../lib/mongodb"
import { CURSOR_FLAGS, ExplainVerbosity, MongoBatchReExecutionError } from "mongodb";



export default async function handler (req, res) {

    const mongoClient = await clientPromise;
    await mongoClient.connect();

    const db = mongoClient.db("sound_of_eggert_db")
    const posts = db.collection("tracklists");

    const data = req.body
    /// destructure the strin in the search query
  
    const document = {
        'queryText': data.text
    }

    //// add data aggregation call
    const agg = [
      {
        '$search': {
          'index': 'default',
          'text': {
            'query': document.queryText +'*',
            'path': {
              'wildcard': '*'
            },
          },
        },
      },
      {
        $limit: 5,
      },
    ];

    const cursor = await posts.aggregate(agg);
    
    const searchResults = await cursor.toArray();

    console.log("this is the type")
    console.log(searchResults[0])
    /// all good!

    //res.status(200).send();

    res.status(200).json(JSON.stringify(searchResults));
    
}