import type { ReactNode } from "react";

import Hero from "@/components/sections/hero/Hero";
import Intro from "@/components/sections/intro/Intro";
import IntroCards from "@/components/sections/intro-cards/IntroCards";
import SnakeBreak from "@/components/sections/snake-break/SnakeBreak";

import pageData from "@/data/index.json";
import styles from "./page.module.scss";

export default function Home(): ReactNode {
  const { hero, intro, snakeBreak } = pageData;

  return (
    <main>
      <div className={styles.hero}>
        <Hero {...hero} />
      </div>

      <div className={styles.intro}>
        <Intro paragraphs={intro.paragraphs} />
      </div>

      <div className={styles.intro}>
        <IntroCards />
      </div>

      <div className={styles.snake}>
        <SnakeBreak {...snakeBreak} />
      </div>
    </main>
  );
}
