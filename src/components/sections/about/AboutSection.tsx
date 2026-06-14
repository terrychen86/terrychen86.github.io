import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import bridge from "@/data/svg/bridge.svg";
import coffee from "@/data/svg/coffee.svg";
import game from "@/data/svg/game.svg";
import suitcase from "@/data/svg/suitcase.svg";

import styles from "./AboutSection.module.scss";

const ICON_MAP = {
  bridge,
  coffee,
  game,
  suitcase,
} satisfies Record<string, StaticImageData>;

type AboutCard = Readonly<{
  iconName: keyof typeof ICON_MAP;
  title: string;
  description: string;
}>;

type Props = Readonly<{
  title: string;
  body: string;
  cards: readonly AboutCard[];
}>;

export default function AboutSection({ title, body, cards }: Props): ReactNode {
  return (
    <section className={styles.root} aria-labelledby="about-title">
      <div className={styles.copy}>
        <p>Outside the console</p>
        <h2 id="about-title">{title}</h2>
        <span>{body}</span>
      </div>

      <div className={styles.cards}>
        {cards.map((card) => (
          <article className={styles.card} key={card.title}>
            <Image
              className={styles.icon}
              src={ICON_MAP[card.iconName]}
              alt=""
              aria-hidden="true"
            />
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
