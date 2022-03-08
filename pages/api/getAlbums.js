import { CURSOR_FLAGS } from "mongodb";
import clientPromise from "../../lib/mongodb"


export default function handler(req, res) {

    // req = { current expected request to query albums
    //     'amount': int,
    //     'order': int (must be 0 or -1)
    //     'filter': flag field, only 'top' enabled giving top 10 highest rated albums
    //     ...
    // }

    const mongoClient = await clientPromise;
    const db = mongoClient.db("sound_of_eggert_db");

    const data = req.body;

    console.log(data);

    const vals = db.albums.find({});

    const goodMusic = db.albums
      .find({ ratings: { $gte: 6 } });


    res.status(200).json({ name: 'John Doe' })
  }