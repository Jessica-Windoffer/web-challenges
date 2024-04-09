import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function ReturnOfKing() {
  const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <div>
      <Link href="/volumes/volumes">← All Volumes</Link>
      <h1>The Return of the King</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Image
        src="/public/images/the-return-of-the-king.png"
        height={230}
        width={140}
        alt="Cover image for 'The Return of the King'"
      />
      <br></br>
      <Link href="/volumes/the-two-towers">
        Previous Volume: The Two Towers
      </Link>
    </div>
  );
}
