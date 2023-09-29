import { Link } from "react-router-dom";
import { Pokemon } from "../types";
import pokeballIcon from "../assets/pokeball.svg";


type Props = {
  pokemon: Pokemon
}

export default function PokemonItem({ pokemon }: Props) {
  return (
    <li key={pokemon.name}>
      <Link to={`/pokemon/${pokemon.name}`}>
        <img
          className="hover:animate-spin"
          alt="pokeball image"
          src={pokeballIcon}
        />
        <p className="text-center first-letter:text-2xl capitalize">
          {pokemon.name}
        </p>
      </Link>
    </li>
  );
}
