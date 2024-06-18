import React from "react";
import AlbumPreview from "./AlbumPreview";
import { URL } from "../utils/constants";

const AlbumPreviewList = ({ albums }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {albums.map((album) => (
        <AlbumPreview
          key={album.name}
          name={album.name}
          coverImage={{
            src: `${URL}/${album.folder}/${album.coverImage}.jpeg`,
            alt: `${album.name} Cover`,
          }}
          link={album.link}
        />
      ))}
    </div>
  );
};

export default AlbumPreviewList;
