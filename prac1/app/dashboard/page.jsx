import Link from "next/link";
export default function Dashboard() {
  return (
    <>
    <h1>Dashboard Page</h1>
    <Link href="/dashboard/profile">View Profile</Link>
    <Link href="/dashboard/setting">View Settings</Link>
    </>
  );
}
