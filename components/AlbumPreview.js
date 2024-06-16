import React from "react";
import ImageComponent from "./ImageComponent";

const AlbumPreview = ({ name, coverImage, link }) => (
  <div style={{ margin: "20px", display: "inline-block" }}>
    <a href={link}>
      <ImageComponent
        src={coverImage.src}
        alt={coverImage.alt}
        width={300}
        height={200}
        priority={true}
        placeholder="blur"
      />
      <h3>{name}</h3>
    </a>
  </div>
);

export default AlbumPreview;
