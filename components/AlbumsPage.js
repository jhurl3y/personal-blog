import React from "react";
import AlbumsPreviewList from "./AlbumsPreviewList";
import { ALBUMS } from "../utils/constants";

const AlbumsPage = () => {
  const albums = ALBUMS.map((album) => ({
    ...album,
    name: album.title,
    link: `/photos/${album.slug}`,
    coverImage: 1,
  }));

  return <AlbumsPreviewList albums={albums} />;
};

export default AlbumsPage;
