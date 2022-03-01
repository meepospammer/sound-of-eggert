import Link from 'next/link'
import Pagetitle from '../components/pagetitle/pagetitle'

export default function TrackLibrary() {
    return (<>
        <Pagetitle title="Discover New Albums"/>
        <div>
            <h1>
                Pull 10 ish random albums and display their art
                Have them move across page slowly and have them be clickable (think netflix)
            </h1>
        </div>
        <Link href ='tracklists/graduation'>
            Our trackslist!
        </Link>
        
    </>)
}