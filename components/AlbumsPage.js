import { useRouter } from "next/router";
import AlbumPreview from "./AlbumPreview";
import { URL, ALBUM_IMAGES } from "../utils/constants";
import { getRandomNumber } from "../utils/helpers";

const AlbumsPage = () => {
  const router = useRouter();
  const { show_albums } = router.query;
  const showAlbums = show_albums === "true";

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      <AlbumPreview
        name="Life Lately"
        coverImage={{
          src: `${URL}/life_lately/${getRandomNumber(
            ALBUM_IMAGES["life-lately"]
          )}.jpeg`,
          alt: "Life Lately Cover",
        }}
        link="/photos/life-lately"
      />
      <AlbumPreview
        name="South America"
        coverImage={{
          src: `${URL}/south_america/${getRandomNumber(
            ALBUM_IMAGES["south-america"]
          )}.jpeg`,
          alt: "South America Cover",
        }}
        link="/photos/south-america"
      />
      {showAlbums && (
        <>
          <AlbumPreview
            name="NYC"
            coverImage={{
              src: `${URL}/new_york/${getRandomNumber(
                ALBUM_IMAGES["new-york"]
              )}.jpeg`,
              alt: "New York Cover",
            }}
            link="/photos/new-york"
          />
          <AlbumPreview
            name="Yosemite"
            coverImage={{
              src: `${URL}/yosemite/${getRandomNumber(
                ALBUM_IMAGES["yosemite"]
              )}.jpeg`,
              alt: "Yosemite Cover",
            }}
            link="/photos/yosemite"
          />
          <AlbumPreview
            name="DC & Nashville"
            coverImage={{
              src: `${URL}/dc_and_nashville/${getRandomNumber(
                ALBUM_IMAGES["dc-and-nashville"]
              )}.jpeg`,
              alt: "DC & Nashville Cover",
            }}
            link="/photos/dc-and-nashville"
          />
        </>
      )}
    </div>
  );
};

export default AlbumsPage;
