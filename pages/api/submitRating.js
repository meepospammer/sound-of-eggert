import clientPromise from "../../lib/mongodb";


export default function handler(req, res) {
    /// **Todo** change this function to talk to our mongodb database and create new post
  

    //connect to mongo instance 
    const mongoClient = await clientPromise;
    const db = mongoClient.db("sound_of_eggert_db");

    const data = req.body;
    const post = data.ratings.insertOne({'user': data.userID, 'rating': data.rating, 'album': data.albumID, 'date': new Date() },);
    const album = data.album;

    console.log(data);
    //destructure the request json


    //response

    res.status(200).json()
    console.log(data)




  }