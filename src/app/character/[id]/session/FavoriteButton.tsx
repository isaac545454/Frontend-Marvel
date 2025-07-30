'use client'

import { useState, useEffect } from 'react';
import styles from './FavoriteButton.module.css';

interface FavoriteButtonProps {
  characterId: string;
  characterName: string;
  characterImage: string;
}

export function FavoriteButton({ characterId, characterName, characterImage }: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('marvelFavorites') || '[]');
    setIsFavorite(favorites.some((fav: any) => fav.id === characterId));
  }, [characterId]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('marvelFavorites') || '[]');
    
    if (isFavorite) {
      const newFavorites = favorites.filter((fav: any) => fav.id !== characterId);
      localStorage.setItem('marvelFavorites', JSON.stringify(newFavorites));
    } else {
      const newFavorites = [...favorites, { 
        id: characterId, 
        name: characterName, 
        image: characterImage 
      }];
      localStorage.setItem('marvelFavorites', JSON.stringify(newFavorites));
    }
    
    setIsFavorite(!isFavorite);
  };

  return (
    <button 
      onClick={toggleFavorite}
      className={styles.favoriteButton}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isFavorite ? "red" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        className={styles.heartIcon}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}