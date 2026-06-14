import Image from "next/image";
import type { ReactNode } from "react";

import styles from "./Hero.module.scss";
import illustration from "./hero-illustration.svg";

type Action = Readonly<{
  label: string;
  href: string;
}>;

type Props = Readonly<{
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryAction: Action;
  secondaryAction: Action;
}>;

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: Props): ReactNode {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions} aria-label="Profile links">
            <a className={styles.primaryAction} href={primaryAction.href}>
              {primaryAction.label}
            </a>
            <a className={styles.secondaryAction} href={secondaryAction.href}>
              {secondaryAction.label}
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <Image
            className={styles.illustration}
            src={illustration}
            alt="Illustration of a developer working with application windows"
            priority
          />
        </div>
      </div>
    </section>
  );
}
