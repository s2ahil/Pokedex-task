import { useState, useEffect } from 'react'
import axios from 'axios'

const Card = ({ pokemon }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(pokemon.url);
        setDetails(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon details:", error);
      }
    };

    fetchDetails();
  }, [pokemon.url]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:bg-green-300 ">
      <img 
        src={details.sprites.front_default} 
        alt={pokemon.name} 
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-semibold text-center mt-2 capitalize">
        {pokemon.name}
      </h2>
      <p className="text-center text-gray-600">
        Type: {details.types.map(type => type.type.name).join(', ')}
      </p>
    </div>
  )
}

export default Card