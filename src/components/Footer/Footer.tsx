'use client'

import Image from 'next/image';
import { ActiveLink } from '../ActiveLink/ActiveLink';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <Image
              src="/marvel-logo.svg"
              alt="Marvel Logo"
              width={100}
              height={40}
              priority
            />
            <p className={styles.copyright}>
              © {new Date().getFullYear()} MARVEL
            </p>
          </div>
          
          <nav className={styles.nav}>
            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>NAVEGAÇÃO</h3>
              <ActiveLink href="/" className={styles.navLink}>
                CHARACTERS
              </ActiveLink>
              <ActiveLink href="/comics" className={styles.navLink}>
                COMICS
              </ActiveLink>
              <ActiveLink href="/series" className={styles.navLink}>
                SERIES
              </ActiveLink>
            </div>

            <div className={styles.linkGroup}>
              <h3 className={styles.groupTitle}>REDES SOCIAIS</h3>
              <a 
                href="https://github.com/isaac545454" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                GITHUB
              </a>
              <a 
                href="https://www.linkedin.com/in/isaac-gomes-matos/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                LINKEDIN
              </a>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}