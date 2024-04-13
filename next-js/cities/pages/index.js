import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to my cities App.</h1>
      <p>
        <Link href="/cities">Click here to see a list of all cities →</Link>
      </p>
    </div>
  );
}
