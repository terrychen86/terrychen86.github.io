import type { ReactNode } from "react";
import Image from "next/image";
import adaptive from "@/data/svg/adaptive.svg";
import blueprint from "@/data/svg/blueprint.svg";
import brain from "@/data/svg/brain.svg";
import bridge from "@/data/svg/bridge.svg";

import camping from "@/data/svg/camping.svg";
import coffee from "@/data/svg/coffee.svg";
import console from "@/data/svg/console.svg";
import desert from "@/data/svg/desert.svg";
import game from "@/data/svg/game.svg";
import suitcase from "@/data/svg/suitcase.svg";

import styles from "./IntroCards.module.scss";

const ICON_MAP = {
  adaptive,
  blueprint,
  brain,
  bridge,
  camping,
  coffee,
  console,
  desert,
  game,
  suitcase,
};

const COLORS = [
  "lightPurple",
  "yellow",
  "pink",
  "green",
  "blue",
  "lightBlue",
  "darkBlue",
  "lightRed",
];

export default function IntroCard(): ReactNode {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card
          color={COLORS[0]}
          iconName="console"
          text="Product Fullstack Engineer"
        />
        <Card
          color={COLORS[1]}
          iconName="blueprint"
          text="Strong UX/Product Scense"
        />
        <Card
          color={COLORS[2]}
          iconName="adaptive"
          text="Focus on Web Application"
        />
        <Card color={COLORS[3]} iconName="brain" text="Soild in CS Algorithm" />
        <Card
          color={COLORS[4]}
          iconName="bridge"
          text="Live in San Francisco"
        />
        <Card color={COLORS[5]} iconName="coffee" text="Coffee Lover" />
        <Card color={COLORS[6]} iconName="game" text="Gamer" />
        <Card color={COLORS[7]} iconName="suitcase" text="Travaler" />
      </div>
    </div>
  );
}

function Card({
  iconName,
  text,
  color,
}: {
  iconName: keyof typeof ICON_MAP;
  color: (typeof COLORS)[number];
  text: string;
}) {
  return (
    <div className={styles.card}>
      <div
        className={[styles.content, styles[color]].filter(Boolean).join(" ")}
      >
        <Image
          className={styles.icon}
          src={ICON_MAP[iconName]}
          alt={iconName}
        />
        <h5 className={styles.cardText}>{text}</h5>
      </div>
    </div>
  );
}
