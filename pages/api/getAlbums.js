import { CURSOR_FLAGS, ExplainVerbosity, MongoBatchReExecutionError } from "mongodb";
import clientPromise from "../../lib/mongodb"


export default async function handler(req, res) {

    // req = { current expected request to query albums
    //     'amount': int,
    //     'order': int (must be 0 or -1)
    //     'filter': flag field, only 'top' enabled giving top 10 highest rated albums
    //     ...
    // }
    const FILTER_ENUM = 4;

    const mongoClient = await clientPromise;
    await mongoClient.connect();
    //connecting to mongo instance

    const db = mongoClient.db("sound_of_eggert_db");
    const albums = db.collection("tracklists");

    
    const data = req.body;

    //server side query is destructured for processing
    ///sample request

    ///replace references to name doc with data once body can be accepted
    const doc = {
      'amount': data.amount,
      'order': data.order,
      'filter': data.filter
    }

    

    /// structure query docuemtn for albums requested
    const query = (doc.filter == 'top') ?  {rating: { $gte: FILTER_ENUM}} : {};
 

    

    ///response from database as promised
    const cursor = await albums.find(query)
      .sort({ rating: doc.order })
      .limit(doc.amount);

    ///get data failed!
    if ((await cursor.count()) === 0) {

      console.log("No documents found!");
      throw MongoBatchReExecutionError;
      

    }


    const albumArray = await cursor.toArray();
    ///sends our data to array
  
    //respond to client wiht requested album information
    ///yes... this needs to use dot stringify
    res.status(200).json(JSON.stringify(albumArray));
  }