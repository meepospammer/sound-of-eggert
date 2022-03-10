import Link from 'next/link'
import Pagetitle from '../components/pagetitle/pagetitle'
import Albumoverview from '../components/albumoverview/albumoverview'


export default function TrackLibrary({isConnected}) {
    return (<>
        <Pagetitle title="Discover New Albums"/>
        <Albumoverview/>
        
    </>)
}


/// this is the example code that brings in some mongodb promise object that 
/// in production: this code woulkd live in getStaticPaths in the indivdidual tracklsit routes
// this will determine that we are connected to our data source and only render albums that exist in our data

export async function getServerSideProps(context) {
    try {
      // client.db() will be the default database passed in the MONGODB_URI
      // You can change the database by calling the client.db() function and specifying a database like:
      // const db = client.db("myDatabase");
      // Then you can execute queries against your database like so:
      // db.find({}) or any of the MongoDB Node Driver commands
      await clientPromise
      return {
        props: { isConnected: true },
      }
    } catch (e) {
      console.error(e)
      return {
        props: { isConnected: false },
      }
    }
  }
  