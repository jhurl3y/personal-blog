import React from "react";
import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";

const AlbumPreview = ({ name, coverImage, link }) => (
  <div className={styles.album_preview}>
    <a href={link} className={styles.album_link}>
      <div className={styles.image_container}>
        <ImageComponent
          src={coverImage.src}
          alt={coverImage.alt}
          width={300}
          height={200}
          priority={true}
          placeholder="blur"
        />
        <div className={styles.dark_overlay}></div>
      </div>
      <h3>{name}</h3>
    </a>
  </div>
);

export default AlbumPreview;
