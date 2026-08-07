import React from "react";
import ImageComponent from "../ImageComponent";
import styles from "./styles.module.css";

const AlbumPreview = ({ name, coverImage, link, priority }) => (
  <div className={styles.album_preview}>
    <a href={link} className={styles.album_link}>
      <div className={styles.image_container}>
        <ImageComponent
          src={coverImage.src}
          alt={coverImage.alt}
          width={300}
          height={200}
          priority={priority}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          placeholder="blur"
        />
        <div className={styles.dark_overlay}></div>
      </div>
      <h3>{name}</h3>
    </a>
  </div>
);

export default AlbumPreview;
