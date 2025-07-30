'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const searchValue = searchRef.current?.value;
    // You can implement the search functionality here
    console.log('Search value:', searchValue);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/marvel-logo.svg"
              alt="Marvel Logo"
              width={130}
              height={52}
              priority
            />
          </Link>
          
          <nav className={styles.nav}>
            <div className={styles.searchContainer}>
              <svg
                className={styles.searchIcon}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                ref={searchRef}
                type="text"
                className={styles.searchInput}
                placeholder="Search characters..."
                onKeyPress={handleKeyPress}
              />
            </div>
            <Link href="/">Characters</Link>
            <Link href="/comics">Comics</Link>
            <Link href="/series">Series</Link>
            
          </nav>
        </div>
      </div>
    </header>
  );
} 