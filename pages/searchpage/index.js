import Link from "next/link";
import ClickableAlbum from "../components/clickablealbum/clickablealbum";
import Pagetitle from "../components/pagetitle/pagetitle";
import styles from "./searchpage.module.css"


var searchResults = [["album name", "artist", "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", 8.6 , "tracklists/gluee"]]
//searchResults is an array containing arrays containing: Album name, artist, img src, rating, page link
export default function searchView() {
    var renderThese = []
    for(let i = 0; i < searchResults.length; i++){
        renderThese.push(<ClickableAlbum name={searchResults[i][0]} artist={searchResults[i][1]} 
        src={searchResults[i][2]} rating={searchResults[i][3]} link={searchResults[i][4]}/>)
    }
    if(typeof window !== 'undefined') {
        var search = sessionStorage.getItem("search")
    }
    return (
        <>
            <Pagetitle title={search} />
            <ul className={styles.ul}>
                {renderThese}
            </ul>
        </>
    )
}

