interface PokemonImageProps {
  src: string;
  alt: string;
}

export default function PokemonImage({ src, alt }: PokemonImageProps) {
  return (
    <div className='container-img-pokemon'>
      <img src={src} alt={alt} />
    </div>
  );
}