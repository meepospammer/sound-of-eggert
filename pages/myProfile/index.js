import Link from "next/link";
import Profile from "../components/profile/profile";
import Pagetitle from "../components/pagetitle/pagetitle";

export default function ProfileView() {
    return (<>
        <Pagetitle title="My Profile:"/>
        <Profile/>
        <Link href="/tracklists">
          View your tracks!
        </Link>

    </>)
}