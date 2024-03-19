import { ReactNode } from "react";
import Image from "next/image";

import styles from "@/components/sections/hero/Hero.module.scss";

import illustration from "./hero-illustration.svg";
import divider from "./wave-divider.svg";

interface IconLink {
  iconName: string;
  url: string;
}

type Props = Readonly<{
  title: string;
  subtitle: string;
  content: string;
  iconLinks?: IconLink;
}>;

export default function Hero({ title, subtitle, content }: Props): ReactNode {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <h1 className={styles.textTitle}>{title}</h1>
            <h2>{subtitle}</h2>
            <p>{content}</p>
          </div>
          <div className={styles.imageBox}>
            <Image src={illustration} alt="hero-image" />
          </div>
        </div>
      </div>
      <div className={styles.wave}>
        <Image className={styles.waveImg} src={divider} alt="hero-image" />
      </div>
    </section>
  );
}
