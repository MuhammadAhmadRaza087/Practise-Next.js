import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <p>Go to personal Info </p> */}
      <Link href={'/personalInfo'}>Personal Info</Link>
      <Link href={'/Client'}> Client</Link>
      <Link href={'/Server'}>Server</Link>
    </main>
  );
}
