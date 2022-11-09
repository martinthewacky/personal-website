import Head from "next/head";
import Header from "../components/Header";

import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={styles.homePage}>
      <Head>
        <title>Martin Matovu's Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContentFlow}></div>
      </main>
    </div>
  );
}

export default HomePage;
