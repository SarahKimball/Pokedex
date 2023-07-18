import React from 'react';
import Pokecard from './Pokecard';

const Pokedex = ({ pokemonData }) => {
  return (
    <div>
      {pokemonData.map(pokemon => (
        <Pokecard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Pokedex;
