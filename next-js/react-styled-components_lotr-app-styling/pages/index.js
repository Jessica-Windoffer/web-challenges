import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the "The Lord of the Rings"-App!</h1>
      <Link href="/volumes">Navigate me to all the volumes →</Link>
    </div>
  );
}
