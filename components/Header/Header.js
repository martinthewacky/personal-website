import Link from "next/link";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.headerSectionLeft}>
        <Link href="/">@</Link>
      </div>
      <div className={styles.headerSectionRight}>
        <button className={styles.headerButton}>Theme</button>
        <button className={styles.headerButton}>Menu</button>
      </div>
    </header>
  );
}
