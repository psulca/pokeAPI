import { Link, useLoaderData } from "react-router-dom";
import { Pokemon } from '../types';
import PrevButton from "../components/PrevButton";
import PokemonImage from "../components/PokemonImage";
import PokemonInfo from "../components/PokemonInfo";

const PokemonDetail = () => {
  const pokemon = useLoaderData() as Pokemon;

  return (
    <div>
      <Link to='/'>
        <PrevButton />
      </Link>
      <div className='header-main-pokemon'>
        <span className='number-pokemon'>#{pokemon.order}</span>
        <PokemonImage
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon?.name}`}
        />
        <PokemonInfo />
      </div>
    </div>
  );
}

export default PokemonDetail;