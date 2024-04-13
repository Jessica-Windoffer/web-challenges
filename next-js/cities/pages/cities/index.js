import { cities } from "@/lib/data";
import styled from "styled-components";
import Link from "next/link";

const StyledHeading = styled.h1`
  text-align: center;
`;

export default function Cities() {
  return (
    <>
      <StyledHeading>Cities</StyledHeading>
      <Link href="/">← Back to Homepgae</Link>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>
            <Link href={`cities/${city.slug}`}>{city.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
