import Rankinglist from '../components/rankinglist/rankinglist.js'
import Pagetitle from '../components/pagetitle/pagetitle.js'

export default function socialView() {
    return (
        <>
            <Pagetitle title="Global Album Rankings:"/>
            <Rankinglist/>
        </>
    )
}


export async function getServerSideProps(context) {


    ///example ping to get albums api, 

    const body = {'amount': 3, 'order' : 1, 'filter': null}
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