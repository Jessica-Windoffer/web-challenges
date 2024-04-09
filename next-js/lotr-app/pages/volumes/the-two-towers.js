import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TwoTowers() {
  const volume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/volumes/volumes">← All Volumes</Link>
      <h1>The Two Towers</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image
        src="/public/images/the-two-towers.png"
        height={230}
        width={140}
        alt="Cover image for 'The Two Towers'"
      />
      <br></br>
      <Link href="/volumes/the-fellowship-of-the-ring">
        Previous Volume: The Fellowship of the Ring
      </Link>
      <br></br>
      <Link href="/volumes/the-return-of-the-king">
        Next Volume: The Return of the King
      </Link>
    </div>
  );
}
