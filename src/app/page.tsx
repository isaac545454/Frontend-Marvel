import { md5 } from "@/lib/md5";
import Image from "next/image";
 
type Thumbnail = {
  path: string;
  extension: string;
};

type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
};

type MarvelAPIResponse = {
  data: {
    results: Character[];
  };
};

async function getCharacters(page: number = 1, limit: number = 20): Promise<Character[]> {
  const { ts, hash, apikey } = md5();
  const offset = (page - 1) * limit;

  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey}&hash=${hash}&limit=${limit}&offset=${offset}`
  );

  if (!res.ok) throw new Error("Erro ao buscar personagens");

  const json = (await res.json()) as MarvelAPIResponse;
  return json.data.results;
}



export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
<div className="characters-container">
      <h1 className="characters-title">Personagens da Marvel</h1>
      <ul className="characters-grid">
        {characters.map((char) => (
          <li key={char.id} className="character-card">
    <Image
  src={`${char.thumbnail.path}.${char.thumbnail.extension}`}
  alt={char.name}
  width={200}
  height={200}
  className="character-image"
/>
            <h2 className="character-name">{char.name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
