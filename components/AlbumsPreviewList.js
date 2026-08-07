import React from "react";
import AlbumPreview from "./AlbumPreview";
import { URL } from "../utils/constants";
import styles from "./AlbumsPreviewList.module.css";

const AlbumPreviewList = ({ albums }) => {
  return (
    <div className={styles.grid}>
      {albums.map((album, index) => (
        <AlbumPreview
          key={album.name}
          name={album.name}
          coverImage={{
            src: `${URL}/${album.folder}/${album.coverImage}.jpeg`,
            alt: `${album.name} Cover`,
          }}
          link={album.link}
          priority={index < 2}
        />
      ))}
    </div>
  );
};

export default AlbumPreviewList;
