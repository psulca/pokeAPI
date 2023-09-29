import { useLoaderData } from 'react-router-dom'
import Pokemons from '../types'
import PokemonItem from '../components/PokemonItem'

export default function PokemonList() {
  const { pokemons } = useLoaderData() as Pokemons
  return (
    <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-16">
      {pokemons.results.map((pokemon) => (
        <PokemonItem key={pokemon.name} pokemon={pokemon} />
      ))}
    </ul>
  )
}
