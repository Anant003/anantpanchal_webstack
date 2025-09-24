import React, { useState, useEffect } from "react";

const PokemonDropdown = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonChache, setPokemonCache] = useState({});
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const pokemonData = await response.json();
        setPokemons(pokemonData.results);
      } catch (error) {
        console.error("Error fetching pokemon data:", error);
      }
    };
    fetchPokemon();
  }, []);

  const handlePokemonSelection = async (url, name) => {
    if (pokemonChache[name]) {
      setAbilities(pokemonChache[name].abilities);
    } else {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAbilities(data.abilities);
        setPokemonCache((prevCache) => ({
          ...prevCache,
          [name]: data,
        }));
        console.log(selectedPokemon);
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
      }
    }
  };

  return (
    <div>
      <h1>Pokemon Dropdown Example</h1>
      <label htmlFor="pokemon-dropdown">Select a Pokemon:</label>
      <select
        name="pokemon-dropdown"
        id="pokemon-dropdown"
        onChange={(e) => {
          const pokemonUrl = e.target.value;
          const selectedName = e.target.options[e.target.selectedIndex].text;
          if (!pokemonUrl) {
            setSelectedPokemon(null);
            setAbilities([]);
            return;
          }
          setSelectedPokemon(pokemonUrl);
          handlePokemonSelection(pokemonUrl, selectedName);
        }}
      >
        <option value="">Please choose an option</option>
        {pokemons.map((pokemon) => (
          <option key={pokemon.name} value={pokemon.url}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {selectedPokemon === null ? (
        <p>Please choose the pokemon from the list to see abilities</p>
      ) : (
        <fieldset>
          <legend>Pokemon Abilities:</legend>
          <ul aria-live="polite">
            {abilities.map((abilityObj) => (
              <li key={abilityObj.ability.name}>{abilityObj.ability.name}</li>
            ))}
          </ul>
        </fieldset>
      )}
    </div>
  );
};

export default PokemonDropdown;
