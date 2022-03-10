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