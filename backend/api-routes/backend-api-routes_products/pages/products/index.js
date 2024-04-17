import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH1 = styled.h1`
  margin: 20px 0 0 0;
`;

const StyledLi = styled.li`
  list-style: none;
`;

const StyledH3 = styled.h3`
  margin: 5px 0 0 0;
  padding: 0;
`;

const StyledLink = styled(Link)`
  margin: 20px 0 10px 0;
  text-decoration: none;
  color: black;
  &:hover {
    color: red;
  }
`;

export default function AllListingsPage() {
  const fetcher = (url) => fetch(url).then((response) => response.json());

  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <StyledSection>
      <StyledH1>List of all Products</StyledH1>
      <ul>
        {data.map((product) => (
          <StyledLi key={product.id}>
            <StyledH3>Name:</StyledH3>
            <StyledLink href={`/products/${product.id}`} passHref>
              {product.name} →
            </StyledLink>
          </StyledLi>
        ))}
      </ul>
    </StyledSection>
  );
}
