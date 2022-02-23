import Link from "next/link";


export default function ProfileView() {
    return (<>
        <h1>
            Welcome Josh!
            <b/>
            This is working
        </h1>
        <Link href="/tracklists">
          View your tracks!
        </Link>

    </>)
}