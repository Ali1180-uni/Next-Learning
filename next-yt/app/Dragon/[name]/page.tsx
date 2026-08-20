import Image from "next/image";
type props = {
    params: Promise<{ name: string }>;
}

export default async function NamePage({ params }: props) {
    const response = await fetch("https://dragonball-api.com/api/characters");
    const data = await response.json();
    const { name } = await params;
    const character = data.items.find((char: { name: string }) => char.name === name);
    if (!character) {
        return <div>Character not found</div>;
    }

  return (
    <div>
      <Image src={character.image} alt={character.name} width={200} height={200} />
      <h1>{character.name}</h1>
      <p>Gender: {character.gender}</p>
      <p>{character.description}</p>
    </div>
  );
}
