import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

export default function Lights(sumLightsCount) {
  return (
    <StyledLights>
      <li>
        <Light name="Living Room" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Kitchen" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Bedroom" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Bathroom" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Garage" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Porch" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Garden" sumLightsCount={sumLightsCount} />
      </li>
      <li>
        <Light name="Office" sumLightsCount={sumLightsCount} />
      </li>
    </StyledLights>
  );
}
