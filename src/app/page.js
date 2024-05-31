import Image from "next/image";
import styles from "./page.module.css";
import ImageSlide from "@/components/images/image-slideShow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <header className={styles.header}>
          <div className={styles.slideshow}>
            <ImageSlide />
          </div>
          <div>
            <div className={styles.title_wrap}>
              <h1>NextLevel Food for Next Level Foodies</h1>
              <p>Taste & share food from all over the world</p>
            </div>
            <div className={styles.link_wrap}>
              <Link className={styles.link1} href='/about'>Join the Community</Link>
              <Link className={styles.link2} href='/contact'>Explore Meals</Link>
            </div>
          </div>
        </header>
      </div>

      <div style={{ marginTop: "75px" }}>
        <header className={styles.header}>
          <div>
            <div className={styles.title_wrap}>
              <h1>NextLevel Food for Next Level Foodies</h1>
              <p>Taste & share food from all over the world</p>
            </div>
            <div className={styles.link_wrap}>
              <Link className={styles.link1} href='/about'>Join the Community</Link>
              <Link className={styles.link2} href='/contact'>Explore Meals</Link>
            </div>
          </div>
          <div className={styles.slideshow}>
            <ImageSlide />
          </div>
    </header >
      </div>
      <main></main>
    </>
  );
}
