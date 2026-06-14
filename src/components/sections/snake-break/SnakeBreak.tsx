import type { ReactNode } from "react";

import styles from "./SnakeBreak.module.scss";

type Props = Readonly<{
  title: string;
  content: string;
}>;

export default function SnakeBreak({ title, content }: Props): ReactNode {
  return (
    <section className={styles.root} aria-labelledby="snake-break-title">
      <div className={styles.copy}>
        <h2 id="snake-break-title" className={styles.title}>
          {title}
        </h2>
        <p>{content}</p>
      </div>

      <div className={styles.gameFrame}>
        <iframe
          className={styles.game}
          src="/snake/snake.html"
          title="Playable Snake game"
        />
      </div>
    </section>
  );
}
