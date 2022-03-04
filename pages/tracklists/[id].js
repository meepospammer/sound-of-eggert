import Head from 'next/head';
import { useRouter } from 'next/router'
import Commentsection from '../components/commentsection/commentsection.js';
import styles from './[id].module.css'

export default function Tracklists({ tracklist }) {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Head>
            <title> {tracklist.id} by {tracklist.artist} excelling in the {tracklist.genre} genre </title>
            </Head>
            <box className={styles.gridcontainer}>
            <img src ={tracklist.thumbnail} className={styles.image} heigh="300px" width = "300px" alt="a picture of our album"/>
            
            <li className={styles.subtitle}>
                {tracklist.artist} :
            </li>

            <li className={styles.title}>
                {tracklist.id}
            </li>

            <li className={styles.rating}>
                8.72 / 10
            </li>
            
            </box>
            <h2>See some Reviews here:</h2>
            <ul>
                <Commentsection/>
            </ul>
        </>
    )
}


export async function getStaticProps({ params }) {
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
            props: {tracklist: data},

        }
    
}
/**
 * get static paths tells next js what routes should be handled by this component, we implment this function with logic that passes props to our react component to render dynamic
 */
export async function getStaticPaths({ params }) {
    const req = await fetch('http://localhost:3000/recordings.json');
    const data = await req.json();

    const paths = data.map(tracklist => {
        return { params: { id: tracklist } }
    })

    return {
        paths, 
        fallback: false
    };
}
/// getStaticPaths tells next js what routes should be handled by this component, we implemnt this function with that logic
/* export async function getStaticPaths() {
    
}
*/
/* this fun ction can be used in place of get static props for components that require frequent re-rendering or dynamic data*/
// export async function getServerSideProps({ params }) {

// }


