import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import adaptive from "@/data/svg/adaptive.svg";
import blueprint from "@/data/svg/blueprint.svg";
import brain from "@/data/svg/brain.svg";
import bridge from "@/data/svg/bridge.svg";
import console from "@/data/svg/console.svg";

import styles from "./FocusSection.module.scss";

const ICON_MAP = {
  adaptive,
  blueprint,
  brain,
  bridge,
  console,
} satisfies Record<string, StaticImageData>;

type FocusItem = Readonly<{
  iconName: keyof typeof ICON_MAP;
  title: string;
  description: string;
  color: "purple" | "yellow" | "blue";
}>;

type Props = Readonly<{
  items: readonly FocusItem[];
}>;

export default function FocusSection({ items }: Props): ReactNode {
  return (
    <section className={styles.root} aria-labelledby="focus-title">
      <div className={styles.header}>
        <p>Engineering style</p>
        <h2 id="focus-title">The kind of problems I like</h2>
      </div>

      <div className={styles.grid}>
        {items.map((item) => (
          <article
            className={[styles.card, styles[item.color]].join(" ")}
            key={item.title}
          >
            <Image
              className={styles.icon}
              src={ICON_MAP[item.iconName]}
              alt=""
              aria-hidden="true"
            />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
