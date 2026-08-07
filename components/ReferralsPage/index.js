import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";

const referrals = [
  {
    name: "Chase Sapphire Reserve",
    issuer: "Chase",
    src: "/images/sapphire.png",
    alt: "Chase Sapphire Reserve",
    link: "https://www.referyourchasecard.com/19y/I46YT1N80X",
  },
  {
    name: "American Express Gold Card",
    issuer: "American Express",
    src: "/images/amex.png",
    alt: "American Express Gold Card",
    link: "https://americanexpress.com/en-us/referral/gold-card?ref=JAMESHITiE&XL=MIANS",
  },
  {
    name: "United Club Infinite Card",
    issuer: "Chase",
    src: "/images/infinite.png",
    alt: "United Club Infinite Card",
    link: "https://www.referyourchasecard.com/215s/GD01I7N8KD",
  },
];

const ReferralsPage = () => (
  <section>
    <p className={styles.blurb}>
      I may receive a referral bonus if you apply through one of these links.
      Offers and eligibility are controlled by the card issuer and can change.
    </p>
    <div className={styles.referral_grid}>
      {referrals.map((referral) => (
        <article className={styles.card} key={referral.name}>
          <div className={styles.image_container}>
            <ImageComponent
              src={referral.src}
              alt={referral.alt}
              width={220}
              height={130}
              priority={false}
              placeholder="blur"
            />
          </div>
          <p className={styles.issuer}>{referral.issuer}</p>
          <h2>{referral.name}</h2>
          <a href={referral.link} target="_blank" rel="noopener noreferrer">
            View current offer ↗
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default ReferralsPage;
