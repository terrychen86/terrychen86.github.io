import type { ReactNode } from "react";

import styles from "./Footer.module.scss";

type Link = Readonly<{
  label: string;
  href: string;
}>;

type Props = Readonly<{
  links: readonly Link[];
}>;

export default function Footer({ links }: Props): ReactNode {
  return (
    <footer className={styles.root}>
      <div className={styles.container}>
        <p>Built by Terry Chen © 2026</p>
        <nav aria-label="Contact links">
          {links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
