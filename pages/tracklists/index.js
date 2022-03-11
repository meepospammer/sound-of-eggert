import Link from 'next/link'
import Pagetitle from '../components/pagetitle/pagetitle'
import Albumoverview from '../components/albumoverview/albumoverview'


export default function TrackLibrary({albums}) {
  console.log(albums.length)
    return (<>
        <Pagetitle title="Discover New Albums"/>
        <Albumoverview albums={albums}/>
        
    </>)
}


/// this is the example code that brings in some mongodb promise object that 
/// in production: this code woulkd live in getStaticPaths in the indivdidual tracklsit routes
// this will determine that we are connected to our data source and only render albums that exist in our data

export async function getServerSideProps(context) {


  ///example ping to get albums api, 

  const body = {'amount': 100, 'order' : -1, 'filter': "top"}
  const res = await fetch('http://localhost:3000/api/getAlbums', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
      })
  
  ///process albums for this page as json this is needed for props!
  const albums = await res.json();

  return {
      props: {albums}
  }
}
  