import pokemonLogo from '../assets/pokemonLogo.svg';

export default function PrevButton() {
  return (
    <header className="flex items-center justify-center">
      <img src={pokemonLogo} alt="Pokemon Logo" />
    </header>
  )
}