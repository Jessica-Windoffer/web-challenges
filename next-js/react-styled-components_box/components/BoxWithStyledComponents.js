import styled from "styled-components";

export default function BoxWithStyledComponents({ $isBlack }) {
  const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 2rem;
    background-color: ${$isBlack ? "black" : "green"};

    &:hover {
      background-color: red;
    }
  `;

  return <StyledBox></StyledBox>;
}
