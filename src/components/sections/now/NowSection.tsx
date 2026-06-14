import type { ReactNode } from "react";

import styles from "./NowSection.module.scss";

type Props = Readonly<{
  title: string;
  body: string;
  notes: readonly string[];
}>;

export default function NowSection({ title, body, notes }: Props): ReactNode {
  return (
    <section className={styles.root} aria-labelledby="now-title">
      <div className={styles.copy}>
        <p className={styles.kicker}>Now</p>
        <h2 id="now-title">{title}</h2>
        <p>{body}</p>
      </div>

      <ul className={styles.notes} aria-label="Current work notes">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
