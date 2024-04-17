import Link from "next/link";
import { introduction, volumes } from "../../lib/data";
import ChevronLeft from "../../public/icons/chevron-left.svg";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <Link href="/">
        <ChevronLeft />
        Back to Homepgae
      </Link>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
