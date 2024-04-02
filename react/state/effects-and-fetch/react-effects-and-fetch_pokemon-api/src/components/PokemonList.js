import { useState, useEffect } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);

  async function loadPokemon() {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await response.json();
      setPokemon(data.results);
    } catch (error) {
      console.log(error);
    }
  }

  // Change the code below so that the loadPokemon function is only executed
  // when the app component is rendered initially`
  useEffect(() => {
    loadPokemon();
  }, []);

  return (
    <main>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
