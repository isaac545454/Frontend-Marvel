'use client'

import Image from 'next/image';
import Link from 'next/link';

import { ActiveLink } from '../ActiveLink/ActiveLink';
import styles from './Header.module.css';

export default function Header() {


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

            <ActiveLink href="/" className={styles.navLink}>
              CHARACTERS
            </ActiveLink>
            <ActiveLink href="/comics" className={styles.navLink}>
              COMICS
            </ActiveLink>
            <ActiveLink href="/series" className={styles.navLink}>
              SERIES
            </ActiveLink>
            <ActiveLink href="/favorites" className={`${styles.navLink} ${styles.favoritesLink}`}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={styles.heartIcon}
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              FAVORITES
            </ActiveLink>
          </nav>
        </div>
      </div>
    </header>
  );
}