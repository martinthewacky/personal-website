import Head from "next/head";
import Header from "../components/Header";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Martin Matovu's Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
    </div>
  );
}

export default HomePage;
