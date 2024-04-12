import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <p>
        <Link href="/cities">Click here to see a list of all cities →</Link>
      </p>
    </div>
  );
}
