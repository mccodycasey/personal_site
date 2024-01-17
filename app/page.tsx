import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <p>
          <code className={styles.code}>Welcome to codycasey.com</code>
        </p>
      </div>

      <div className={styles.grid}>
        <a
          href="https://www.linkedin.com/in/michael-c-casey/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
              Linkedin <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://www.ghostlabel.io"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GhostLabel <span>-&gt;</span>
          </h2>
        </a>

        <a
          href="https://apps.shopify.com/ghostlabel"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            GhostLabel Shopify App <span>-&gt;</span>
          </h2>

        </a>
      </div>
    </main>
  )
}
