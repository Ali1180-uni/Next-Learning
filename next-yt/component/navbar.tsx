import Link from "next/link";

export default function navbar () {
    return (
        <div>
            <nav className="h-20 w-full p-6 flex gap-4 bg-blue-900">
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
                <Link href="/Data">Data</Link>
                <Link href="/Data/info">Data info</Link>
            </nav>
        </div>
    )
}