import Head from 'next/head';
import { useRouter } from 'next/router'
import Commentsection from '../components/commentsection/commentsection.js';
import Pagetitle from '../components/pagetitle/pagetitle.js';
import styles from './[id].module.css'
import { useState } from 'react';
import { render } from 'react-dom';

import clientPromise from "../../lib/mongodb"

 //Update this variable to pull the user's rating for this album
import SubmitPost from '../components/submitPost/submitPost.js';
/// this file enables dynamic routing for various albums/ tracklists this is one example of displaying dynamic data given user interaction
export default function Tracklists({ tracklist }) {
    const router = useRouter();
    const { id } = router.query;
    var ueberschrift = <>{tracklist.artist} : {tracklist.id}</>

    var initialRating = 8.21
    var peopleWhoRatedThisAlbum = 10
    var initialUserRating = "Unrated"
    

    const[rtt, setrtt] = useState(initialUserRating)

    const[communityRating, setcommunityRating] = useState(initialRating)

    var outof = " / 10"
    if(rtt == "Unrated"){
        outof = ''
    }

    function editRating(upvote){
        var userRating = rtt
        
        if(upvote){
            if(userRating == "Unrated"){
                userRating = 0
            }
            else if(userRating < 10)
                userRating++
        }
        else{
            if(userRating > -1)
                userRating--
                
            if(userRating == -1){
                userRating = "Unrated"
            }
        }
        console.log(userRating)             //TODO: Update rating and push new user rating to db
        if(userRating != "Unrated"){
            setcommunityRating((((initialRating * peopleWhoRatedThisAlbum) + userRating)/(peopleWhoRatedThisAlbum + 1)).toFixed(2))
        }else{
            setcommunityRating(initialRating)
        }
        setrtt(userRating)
    }

    return (
        <>
            <Head>
            <title> {tracklist.title} by {tracklist.Artist} excelling in the {tracklist.genre} genre </title>
            </Head>
            <Pagetitle title={ueberschrift}/>
            <box className={styles.gridcontainer}>
                <img src ={tracklist.img_src} className={styles.image} heigh="300px" width = "300px" alt="a picture of our album"/>
                
                <rating1>
                    <li className={styles.title}>
                        Community Rating:
                    </li>
                    <li className={styles.subtitle}>
                        <div>
                            {communityRating}
                        </div>
                    </li>
                </rating1>

                <rating2>
                    <li className={styles.title}>
                        Your Rating:
                    </li>
                    <li className={styles.subtitle}>
                        <div>
                            {rtt} {outof}
                        </div>
                    </li>
                </rating2>
                <buttonsection>
                    <button className={styles.updatebutton}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNlNzRjM2MiPjxwYXRoIGQ9Ik0xOTYuNzY2MDMsMTA1LjQxMzMzbC04MC4wNDE2NywtMTAzLjU4MzMzYy0wLjg5MTE0LC0xLjE1Mjk3IC0yLjMwNTQyLC0xLjgyODg3IC0zLjcyMDIyLC0xLjgzYy0xLjQxNzU2LC0wLjAwMTEzIC0yLjgzNTYzLDAuNjc0NzggLTMuNzI4NTEsMS44M2wtODAuMDQxNjcsMTAzLjU4MzMzYy0xLjA5ODkyLDEuNDIwNzggLTEuMjkyMDMsMy4zNDI3MyAtMC41MDExOCw0Ljk1MjAzYzAuNzkwODUsMS42MTM4OSAyLjQyNzczLDIuNjM0NjQgNC4yMjU1NSwyLjYzNDY0aDQyLjM3NXYxMDguMjkxNjdjMCwyLjYwMjQ2IDIuMTA1ODgsNC43MDgzMyA0LjcwODMzLDQuNzA4MzNoNjUuOTE2NjdjMi42MDI0NiwwIDQuNzA4MzMsLTIuMTA1ODggNC43MDgzMywtNC43MDgzM3YtMTA4LjI5MTY3aDQyLjM3NWMxLjc5NzgxLDAgMy40MzQ2OSwtMS4wMjA3NSA0LjIyNTU1LC0yLjYzNDY0YzAuNzkwODUsLTEuNjA5MjkgMC41OTc3NCwtMy41MzEyNSAtMC41MDExOCwtNC45NTIwM3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
                            heigth="100px" width="100px"
                            onClick={() => editRating(true)}/>
                    </button>
                    <button className={styles.updatebutton}>
                            <img src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAyMjYgMjI2Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyMjZ2LTIyNmgyMjZ2MjI2eiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiMzNDk4ZGIiPjxwYXRoIGQ9Ik0xOTcuMjY3MjEsMTE1LjYzNDY0Yy0wLjc5MDg1LC0xLjYxMzg5IC0yLjQyNzczLC0yLjYzNDY0IC00LjIyNTU1LC0yLjYzNDY0aC00Mi4zNzV2LTEwOC4yOTE2N2MwLC0yLjYwMjQ2IC0yLjEwNTg4LC00LjcwODMzIC00LjcwODMzLC00LjcwODMzaC02NS45MTY2N2MtMi42MDI0NiwwIC00LjcwODMzLDIuMTA1ODggLTQuNzA4MzMsNC43MDgzM3YxMDguMjkxNjdoLTQyLjM3NWMtMS43OTc4MSwwIC0zLjQzNDY5LDEuMDIwNzUgLTQuMjI1NTUsMi42MzQ2NGMtMC43OTA4NSwxLjYwOTI5IC0wLjU5Nzc0LDMuNTMxMjUgMC41MDExOCw0Ljk1MjAzbDgwLjA0MTY3LDEwMy41ODMzM2MwLjg5MjAxLDEuMTU0MDkgMi4yNjY4LDEuODMgMy43MjQzNywxLjgzYzEuNDU3NTYsMCAyLjgzMjM2LC0wLjY3NTkgMy43MjQzNywtMS44M2w4MC4wNDE2NywtMTAzLjU4MzMzYzEuMDk4OTIsLTEuNDIwNzggMS4yOTIwMywtMy4zNDI3MyAwLjUwMTE4LC00Ljk1MjAzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                            heigth="100px" width="100px"
                            onClick={() => editRating(false)}/>
                    </button>
                 </buttonsection>
            

            </box>
            <Commentsection/>

        </>
    )
    
}


// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//             props: {tracklist: data},

//         }
    
// }

// This gets called on every request
export async function getServerSideProps({ params }) {
    // Fetch data from external API
  
    // Pass data to the page via props
    
    const mongoClient = await clientPromise;
    await mongoClient.connect();

    const db = mongoClient.db("sound_of_eggert_db");
    const albums = db.collection("tracklists");

    const albumName = params.id

    const docQuery = {
        'title': albumName
    }

    const cursor = await albums.find(docQuery).limit(1);
    

    const count = await cursor.count();
    console.log(count);
    if (count == 0) {
        console.log("no album found!");
    }

    const result = await cursor.toArray();





    const data = result[0];
    const realData = JSON.parse(JSON.stringify(data));

    console.log(realData, "we got comamnder data");
    return { props: { tracklist: realData } }




  }
/**
 * get static paths tells next js what routes should be handled by this component, we implment this function with logic that passes props to our react component to render dynamic
 */
// export async function getStaticPaths({ params }) {
//     const req = await fetch('http://localhost:3000/recordings.json');
//     const data = await req.json();

//     const paths = data.map(tracklist => {
//         return { params: { id: tracklist } }
//     })

//     return {
//         paths, 
//         fallback: false
//     };
// }
/// getStaticPaths tells next js what routes should be handled by this component, we implemnt this function with that logic
/* export async function getStaticPaths() {
    
}
*/
/* this fun ction can be used in place of get static props for components that require frequent re-rendering or dynamic data*/
// export async function getServerSideProps({ params }) {

// }


