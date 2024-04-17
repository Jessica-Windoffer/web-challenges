import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
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

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(`/api/products/${id}`);

  if (error) {
    return <div>Failed to load product</div>;
  }

  if (!data) {
    return;
  }

  return (
    <StyledArticle>
      <StyledLink href="/products">← Back to List of all Products</StyledLink>
      <StyledH3>ID: {id}</StyledH3>
      <h1>Details for: {data.name}</h1>
      <StyledH3>Description:</StyledH3>
      <p>{data.description}</p>
      <StyledH3>Price:</StyledH3>
      <p>
        {data.price} {data.currency}
      </p>
      <StyledH3>Category:</StyledH3>
      <p>{data.category}</p>
    </StyledArticle>
  );
}
