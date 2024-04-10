import BoxWithStyledComponents from "@/components/BoxWithStyledComponents";
import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName";
import styled from "styled-components";

export default function HomePage() {
  const StyledBoxes = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <StyledBoxes>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </StyledBoxes>
  );
}
