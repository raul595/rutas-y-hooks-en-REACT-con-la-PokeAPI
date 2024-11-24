import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './cards.css';

function Tarjeta({ generation }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getGenerationRange = (gen) => {
      if (gen === "1") return [1, 151];
      if (gen === "2") return [152, 251];
      if (gen === "3") return [252, 386];
      return [1, 1010];
    };

    const [start, end] = getGenerationRange(generation);

    const generateUniqueIds = () => {
      const idsSet = new Set();
      while (idsSet.size < 10) {
        const randomId = Math.floor(Math.random() * (end - start + 1)) + start;
        idsSet.add(randomId);
      }
      return Array.from(idsSet);
    };

    const fetchPokemon = async () => {
      try {
        const randomIds = generateUniqueIds();
        const promises = randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json())
        );
        const results = await Promise.all(promises);
        const formattedResults = results.map((data) => ({
          numero: data.id,
          nombre: data.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
          hp: data.stats[0].base_stat,
          ataque: data.stats[1].base_stat,
          defensa: data.stats[2].base_stat,
          ataque_especial: data.stats[3].base_stat,
          defensa_especial: data.stats[4].base_stat,
          velocidad: data.stats[5].base_stat,
        }));

        setPokemons(formattedResults);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };

    fetchPokemon();
  }, [generation]);

  const reloadPokemon = async (index) => {
    const [start, end] = generation === "1"
      ? [1, 151]
      : generation === "2"
      ? [152, 251]
      : generation === "3"
      ? [252, 386]
      : [1, 1010];

    const randomId = Math.floor(Math.random() * (end - start + 1)) + start;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
      const data = await response.json();
      const newPokemon = {
        numero: data.id,
        nombre: data.name,
        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
        hp: data.stats[0].base_stat,
        ataque: data.stats[1].base_stat,
        defensa: data.stats[2].base_stat,
        ataque_especial: data.stats[3].base_stat,
        defensa_especial: data.stats[4].base_stat,
        velocidad: data.stats[5].base_stat,
      };

      setPokemons((prevPokemons) => {
        const updatedPokemons = [...prevPokemons];
        updatedPokemons[index] = newPokemon;
        return updatedPokemons;
      });
    } catch (error) {
      console.error("Error recargando Pokémon:", error);
    }
  };

  return (
    <div className="cards-container">
      {pokemons.map((pokemon, index) => (
        <Card key={pokemon.numero} className="pokemon-card">
          <Card.Img variant="top" src={pokemon.img} alt={pokemon.nombre} />
          <Card.Body>
            <Card.Title>
              {pokemon.numero}: {pokemon.nombre}
            </Card.Title>
            <Card.Text>
              HP: {pokemon.hp} | Ataque: {pokemon.ataque} | Defensa: {pokemon.defensa} <br />
              Ataque especial: {pokemon.ataque_especial} | Defensa especial: {pokemon.defensa_especial} | Velocidad: {pokemon.velocidad}
            </Card.Text>
            <button onClick={() => reloadPokemon(index)}>Recargar</button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Tarjeta;






