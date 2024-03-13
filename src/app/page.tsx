import styles from "./page.module.scss";
import Hero from "@/components/sections/hero/Hero";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <Hero title="tbd" content="TBD" />
      </div>
    </main>
  );
}
