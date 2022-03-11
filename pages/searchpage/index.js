import ClickableAlbum from "../components/clickablealbum/clickablealbum";
import Pagetitle from "../components/pagetitle/pagetitle";
import styles from "./searchpage.module.css"
import {useRouter} from "next/router";

//var searchResults = [["album name", "artist", "https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg", 8.6 , "tracklists/gluee"]]
//searchResults is an array containing arrays containing: Album name, artist, img src, rating, page link

var search
var query

export default function searchView({albums}) {
    const router = useRouter();
   

    if(typeof window !== 'undefined') {
        search = sessionStorage.getItem("search")
        query = location.search.substring(1);
    }
    
   // console.log(albums.albums.Artist)
    var renderThese = []
    if(albums != ""){
        let obj = albums.find(obj => obj.title === query)
        console.log("this is albums:")
        console.log({search})
        console.log(obj)
        if(obj != undefined){
        var renderobj = <ClickableAlbum name={obj.title} artist={obj.Artist} src={obj.img_src}
                    rating={obj.rating} link={"/tracklists/" +obj.title}/>
        renderThese.push(renderobj)
        }
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
