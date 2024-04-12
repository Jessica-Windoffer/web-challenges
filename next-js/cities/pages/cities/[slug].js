import Link from "next/link";
import Head from "next/head";

export default function CityDetail() {
  return (
    // <>
    //   <Link href="/cities">← Back to all cities</Link>
    //   <h1>City!!</h1>
    // </>

        
    <Head>
        <title>List of Volumes</title>
      </Head>

      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
  );
}
