'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Favorites.module.css';

interface FavoriteCharacter {
  id: string;
  name: string;
  image: string;
}

export default function Favorites() {
  const [favorites, setFavorites] = useState<FavoriteCharacter[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('marvelFavorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>My Favorite Characters</h1>
      
      {favorites.length === 0 ? (
        <p className={styles.emptyMessage}>You haven&apos;t added any characters to your favorites yet.</p>
      ) : (
        <div className={styles.grid}>
          {favorites.map((character) => (
            <Link href={`/character/${character.id}`} key={character.id} className={styles.card}>
              <div className={styles.imageContainer}>
                <Image
                  src={character.image}
                  alt={character.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                />
              </div>
              <h2 className={styles.characterName}>{character.name}</h2>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}