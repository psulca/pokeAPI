import { useLoaderData } from 'react-router-dom';
import { Pokemon } from '../types';

export default function PokemonInfo () {
  const pokemon = useLoaderData() as Pokemon
  return (
    <div className='container-info-pokemon'>
      <h1 className="capitalize">{pokemon.name}</h1>
      <div className='card-types info-pokemon-type'>
        {pokemon.types.map(type => (
          <span key={type.type.name} className={`${type.type.name}`}>
            {type.type.name}
          </span>
        ))}
      </div>
      <div className='info-pokemon'>
        <div className="group-info">
          <p>Habilidades</p>
          {pokemon.abilities.map((ability) => (
            <span key={ability.ability.name} className="capitalize">{ability.ability.name}</span>
          ))}
        </div>
        <div className='group-info'>
          <p>Experiencia Base</p>
          <span>{pokemon.base_experience} XP</span>
        </div>
        <div className='group-info'>
          <p>Altura</p>
          <span>{pokemon.height}</span>
        </div>
      </div>
    </div>
  );
}