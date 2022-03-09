import clientPromise from "../../lib/mongodb"


export default async function handler(req, res) {
  

    //connect to mongo instance 
    const mongoClient = await clientPromise;
    await mongoClient.connect();

    const db = mongoClient.db("sound_of_eggert_db");
    const posts = db.collection("posts");

    const data = req.body;


    /// destructure request
    const document = {
      'user': data.userID,
      'text': data.comment, 
      'date': new Date() };

    const insert = await posts.insertOne(document);
    /// insert post to db connection


    //destructure the request json


    //response

    res.status(200).json()




  }