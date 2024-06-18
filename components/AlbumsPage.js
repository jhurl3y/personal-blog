import React from "react";
import { useRouter } from "next/router";
import AlbumsPreviewList from "./AlbumsPreviewList";
import { ALBUM_IMAGES } from "../utils/constants";

const AlbumsPage = () => {
  const router = useRouter();
  const { show_albums } = router.query;
  const showAlbums = true; // show_albums === "true";

  const mainAlbums = [
    {
      name: "Life Lately",
      folder: "life_lately",
      imageCount: ALBUM_IMAGES["life-lately"],
      link: "/photos/life-lately",
      coverImage: 1,
    },
    {
      name: "Lima, Peru",
      folder: "lima",
      imageCount: ALBUM_IMAGES["lima"],
      link: "/photos/lima",
      coverImage: 1,
    },
    {
      name: "Bolivia",
      folder: "bolivia",
      imageCount: ALBUM_IMAGES["bolivia"],
      link: "/photos/bolivia",
      coverImage: 1,
    },
    {
      name: "Salkantay Trek, Peru",
      folder: "salkantay",
      imageCount: ALBUM_IMAGES["salkantay"],
      link: "/photos/salkantay",
      coverImage: 1,
    },
    {
      name: "Chile & Argentina",
      folder: "chile_and_argentina",
      imageCount: ALBUM_IMAGES["chile-and-argentina"],
      link: "/photos/chile-and-argentina",
      coverImage: 1,
    },
  ];

  const additionalAlbums = [
    {
      name: "NYC",
      folder: "new_york",
      imageCount: ALBUM_IMAGES["new-york"],
      link: "/photos/new-york",
      coverImage: 1,
    },
    {
      name: "Yosemite",
      folder: "yosemite",
      imageCount: ALBUM_IMAGES["yosemite"],
      link: "/photos/yosemite",
      coverImage: 1,
    },
    {
      name: "DC & Nashville",
      folder: "dc_and_nashville",
      imageCount: ALBUM_IMAGES["dc-and-nashville"],
      link: "/photos/dc-and-nashville",
      coverImage: 1,
    },
  ];

  return (
    <>
      <AlbumsPreviewList
        albums={showAlbums ? [...mainAlbums, ...additionalAlbums] : mainAlbums}
      />
    </>
  );
};

export default AlbumsPage;
