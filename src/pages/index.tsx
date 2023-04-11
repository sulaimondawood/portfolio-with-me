import Head from "next/head";
import styles from "../styles/default.module.scss";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <title>Create Next App</title>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.index_bg}>
        <Navigation />
        <Hero />
        <Footer />
      </main>
    </>
  );
}
