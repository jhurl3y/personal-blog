import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";

const referrals = [
  {
    src: "/images/sapphire.png",
    alt: "Chase Sapphire Reserve",
    link: "https://www.referyourchasecard.com/19o/SAS2WY6H38",
  },
  {
    src: "/images/explorer.png",
    alt: "United Explorer Credit Card",
    link: "https://www.referyourchasecard.com/215A/8H1HY0Z2NX",
  },
  {
    src: "/images/amex.png",
    alt: "AMEX Gold Credit Card",
    link: "https://americanexpress.com/en-us/referral/gold-card?ref=JAMESHUCKB&XLINK=MYCP",
  },
  {
    src: "/images/infinite.png",
    alt: "United Club Infinite Card",
    link: "https://www.referyourchasecard.com/215A/6SLG8CU5AT",
  },
];

const ReferralsPage = () => {
  return (
    <div>
      <p className={styles.blurb}>
        Use my referral links below to sign up for these credit cards and get an
        exclusive sign-on promotion! Click on the images to learn more and take
        advantage of the offers.
      </p>
      <div className={styles.referral_grid}>
        {referrals.map((referral, index) => (
          <a
            href={referral.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={styles.image_container}>
              <ImageComponent
                src={referral.src}
                alt={referral.alt}
                width={220}
                height={130} // Smaller size
                priority={true}
                placeholder="blur"
              />
              <div className={styles.dark_overlay}></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ReferralsPage;
