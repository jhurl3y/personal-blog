import Link from "next/link";
import styles from "./styles.module.css";

const JournalHome = ({ latest, album }) => (
  <div className={styles.home}>
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Engineering · Travel · Photography</p>
      <p className={styles.lead}>
        Notes from San Francisco, with roots in Galway.
      </p>
      <p className={styles.copy}>
        Longer notes on building software, working with AI, and the places I get
        to see along the way.
      </p>
      <div className={styles.actions}>
        <Link href="/posts" className={styles.primaryAction}>
          Read the latest
        </Link>
        <Link href="/photos" className={styles.secondaryAction}>
          Browse photo journals
        </Link>
      </div>
    </section>
    <section className={styles.destinations} aria-label="Explore the journal">
      <article className={styles.destination}>
        <p className={styles.cardLabel}>Writing</p>
        <h2>{latest.title}</h2>
        <p>{latest.description}</p>
        <Link href={latest.href}>Read article →</Link>
      </article>
      <article className={styles.destination}>
        <p className={styles.cardLabel}>Photo journals</p>
        <h2>{album.title}</h2>
        <p>Travel photographs and field notes from the road.</p>
        <Link href={album.href}>Browse photos →</Link>
      </article>
      <article className={styles.destination}>
        <p className={styles.cardLabel}>Elsewhere</p>
        <h2>Portfolio</h2>
        <p>Professional work, experience, and ways to get in touch.</p>
        <a href="https://www.jameshurley.ie/">Visit portfolio ↗</a>
      </article>
    </section>
  </div>
);

export default JournalHome;
