import DBZCard from "@/component/dbzCard";
type chars = {
  id: number;
  name: string;
  gender: string;
  image: string;
  description: string;
};
export default async function DBZ() {
  const response = await fetch("https://dragonball-api.com/api/characters");
  const data = await response.json();
  return (
    <div>
      <h1>Dragon Ball Z</h1>
      <div className="flex flex-wrap gap-4">
        {data.items.map((character: chars) => (
          <DBZCard
            key={character.id}
            name={character.name}
            gender={character.gender}
            image={character.image}
            description={character.description}
          />
        ))}
      </div>
    </div>
  );
}
