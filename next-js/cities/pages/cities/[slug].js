import Link from "next/link";
import styled from "styled-components";
import { cities } from "@/lib/data";
import { useRouter } from "next/router";

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function City() {
  const router = useRouter();

  if (!router.query) {
    return null;
  }

  const { slug } = router.query;

  const city = cities.find((city) => city.slug === slug);

  if (!city) {
    return null;
  }

  return (
    <div>
      <StyledHeading>{city.name}</StyledHeading>
      <Link href="/cities">← Back to list of all cities</Link>
      <p>City name: {city.name}</p>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <p>Description: {city.description}</p>
    </div>
  );
}
