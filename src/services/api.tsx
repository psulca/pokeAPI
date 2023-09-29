import Pokemons, { Pokemon } from '../types'
import { LoaderFunctionArgs } from 'react-router-dom'


export const listLoader = async (): Promise<Pokemons> => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
  if (!response.ok) {
    throw new Error("Failed to load pokemon list")
  }
  const pokemons = await response.json()
  return { pokemons }
}


export const pokemonLoader = async ({ params }: LoaderFunctionArgs): Promise<Pokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
  if (!response.ok) {
    throw new Error("Failed to load pokemon list")
  }
  const pokemon = await response.json()
  return pokemon
}