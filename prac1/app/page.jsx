import Link from "next/link";
export default function Home() {
  return (
    <>
    <h1>Files are Added and Practice is Started</h1>
    <Link href="/about">Let me lead you to About </Link>
    <Link href="/contact">Let me lead you to Contact </Link>
    <Link href="/dashboard">Let me lead you to Dashboard </Link>
    </>
  );
}
