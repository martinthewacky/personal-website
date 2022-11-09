import Link from "next/link";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/outline";
import { Bars2Icon } from "@heroicons/react/24/outline";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.head}>
      <div className={styles.headerSectionLeft}>
        <Link href="/">
          <AtSymbolIcon className={styles.headerSectionLogo} />
        </Link>
      </div>
      <div className={styles.headerSectionRight}>
        <button className={styles.headerButton}>
          <MoonIcon className={styles.headerIcon} />
        </button>
        <button className={styles.headerButton}>
          <Bars2Icon className={styles.headerIcon} />
        </button>
      </div>
    </header>
  );
}
