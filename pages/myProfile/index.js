import Link from "next/link";
/// this should probably be a page populated by components in '../components' if kept in current routing

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