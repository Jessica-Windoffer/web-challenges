import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false, count: 0 },
    { id: 2, name: "Kitchen", isOn: false, count: 0 },
    { id: 3, name: "Bedroom", isOn: false, count: 0 },
    { id: 4, name: "Bathroom", isOn: false, count: 0 },
    { id: 5, name: "Garage", isOn: false, count: 0 },
    { id: 6, name: "Porch", isOn: false, count: 0 },
    { id: 7, name: "Garden", isOn: false, count: 0 },
    { id: 8, name: "Office", isOn: false, count: 0 },
  ]);

  function handleSetLights(id, isOnValue) {
    const mutatedLights = lights.map((light) => {
      if (light.id !== id) {
        return lights;
      }

      return { ...lights, isOn: !light.isOn };
    });

    setLights(mutatedLights);
  }

  const lightsCountSum = lights.reduce((acc, currentCounter) => {
    const newAcc = acc + currentCounter.count;
    return newAcc;
  }, 0);

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        sumLightsCount={lightsCountSum}
      />
    </Layout>
  );
}
