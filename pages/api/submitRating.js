import clientPromise from "../../lib/mongodb";


export default function handler(req, res) {
    /// **Todo** change this function to talk to our mongodb database and create new post

        //connect to mongo instance 
        const mongoClient = await clientPromise;
        await mongoClient.connect();

        const db = mongoClient.db("sound_of_eggert_db");
        const posts = db.collection("posts");

        const data = req.body;

        const doc = {
          'user': data.userID,
          'type': 'rating',
          'ratingVal': data.rating,
          'album':data.albumID,
          'date': new Date(),
        }


      const insert = await posts.insertOne(doc);

      res.status(200).json()
      console.log(data.body)
  



  }