import { ReactNode } from "react";
import styles from "@/components/sections/intro/Intro.module.scss";

export default function Intro(): ReactNode {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>About Me</h1>
        </div>
        <div className={styles.imageBox}>
          <img
            className={styles.image}
            src="/profile_img.jpg"
            alt="profile-photo"
          />
        </div>

        <div className={styles.contentBox}>
          <p>
            I&apos;m Terry Chen, a full-stack software engineer living in the
            San Francisco. I&apos;ve been dedicated to building client-facing
            products from scratch and scaling them for over 6 years.
          </p>
          <br />
          <p>
            With experience in both early-stage and late-stage hyper-growth
            startups, I enjoy the fast-paced culture of collaborative
            environments where we move quickly and innovate fearlessly.
          </p>
          <br />
          <p>
            Outside of work, I love to travel and explore the good food.
            I&apos;m also an avid gamer, spending a lot of my free time playing
            video games.
          </p>
        </div>
      </div>
    </div>
  );
}
