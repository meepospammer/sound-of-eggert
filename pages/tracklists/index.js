import Link from 'next/link'
import Rankinglist from '../components/rankinglist/rankinglist.js'

export default function TrackLibrary() {
    return (<>
        <Link href ='tracklists/graduation'>
            Our trackslist!
        </Link>
        <Rankinglist/>
    </>)
}