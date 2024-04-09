import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function FellowshipOfRing() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  return (
    <div>
      <Link href="/volumes/volumes">← All Volumes</Link>
      <h1>The Fellowship of the Ring</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image
        src="/public/images/the-fellowship-of-the-ring.png"
        height={230}
        width={140}
        alt="Cover image for 'The Fellowship of the Ring'"
      />
      <br></br>
      <Link href="/volumes/the-two-towers">Next Volume: The Two Towers</Link>
    </div>
  );
}
