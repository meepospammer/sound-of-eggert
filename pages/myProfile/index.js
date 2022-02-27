import Link from "next/link";
import Profile from "../components/profile/profile";

export default function ProfileView() {
    return (<>
        <Profile/>
        <Link href="/tracklists">
          View your tracks!
        </Link>

    </>)
}