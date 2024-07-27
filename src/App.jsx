import { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from "./components/ManagePages"

function App() {

  const [pokemons, setPokemons] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {

    const fetchPokemons = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        const results = response.data.results;

        // const pokemonData = await Promise.all(results.map(async (pokemon) => {
        //   const res = await axios.get(pokemon.url);
        //   return res.data;
        // }));
        setPokemons(results)

        console.log(results)
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchPokemons();

  }, [])


  const filteredPokemons = pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Pokedex 🅿️
        <svg fill="#000000" width="48" height="48" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg">
        </svg>
        </h1>
        <input
          type="text"
          placeholder="Search Pokémon"
          className="w-full p-2 mb-4 border rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPokemons.map(pokemon => (
            <Card key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>

    </>
  )
}

export default App
