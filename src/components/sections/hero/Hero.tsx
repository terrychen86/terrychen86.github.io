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
  content: string;
  iconLinks?: IconLink;
}>;

export default function Hero(_props: Props): ReactNode {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <h1 className={styles.textTitle}>👋 Welcome, </h1>
            <h2>I am Terry</h2>
            <p>
              a software engineer focusing on building elegant and
              high-performance client-facing products.
            </p>
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
