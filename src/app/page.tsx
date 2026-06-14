import type { ReactNode } from "react";

import AboutSection from "@/components/sections/about/AboutSection";
import FocusSection from "@/components/sections/focus/FocusSection";
import Footer from "@/components/sections/footer/Footer";
import Hero from "@/components/sections/hero/Hero";
import NowSection from "@/components/sections/now/NowSection";
import SnakeBreak from "@/components/sections/snake-break/SnakeBreak";

import pageData from "@/data";
import styles from "./page.module.scss";

export default function Home(): ReactNode {
  const { hero, now, focusAreas, about, snakeBreak, links } = pageData;

  return (
    <main className={styles.page}>
      <Hero {...hero} />
      <NowSection {...now} />
      <FocusSection items={focusAreas} />
      <AboutSection {...about} />
      <SnakeBreak {...snakeBreak} />
      <Footer links={links} />
    </main>
  );
}
