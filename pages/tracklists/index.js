import Link from 'next/link'
import Pagetitle from '../components/pagetitle/pagetitle'
import Albumoverview from '../components/albumoverview/albumoverview'

export default function TrackLibrary() {
    return (<>
        <Pagetitle title="Discover New Albums"/>
        <Albumoverview/>
        
    </>)
}