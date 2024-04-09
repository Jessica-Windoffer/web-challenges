import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const { title, description, books } = currentVolume;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map((book) => (
          <li key={book.ordinal}>{book.title}</li>
        ))}
      </ul>
      <Link href="/volumes">← Back to all volumes</Link>
    </>
  );
}
