import { ReactNode } from "react";
import styles from "@/components/sections/intro/Intro.module.scss";

type Props = Readonly<{
  paragraphs: string[];
}>;

export default function Intro({ paragraphs }: Props): ReactNode {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>About Me</h2>
        </div>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src="/profile_img.jpg"
            alt="profile-photo"
          />
        </div>

        <div className={styles.contentBox}>
          {paragraphs.map((text, i) => (
            <p className={styles.paragraph} key={i}>
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
