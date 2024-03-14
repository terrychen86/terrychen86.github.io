import Hero from "@/components/sections/hero/Hero";
import Intro from "@/components/sections/intro/Intro";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Hero title="tbd" content="TBD" />
      </div>

      <div className={styles.intro}>
        <Intro />
      </div>
    </main>
  );
}
