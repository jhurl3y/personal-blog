import { useRouter } from "next/router";
import ImageWrapper from "./ImageWrapper";
import { URL, ALBUM_IMAGES, ALBUM_TITLES } from "../utils/constants";
import { convertToSnakeCase, convertToTitleCase } from "../utils/helpers";
import { shuffle } from "../utils/helpers";

const AlbumPage = () => {
  const router = useRouter();
  const { album } = router.query;

  if (!album) return null;

  const imageCount = ALBUM_IMAGES[album];

  const images = shuffle(
    Array.from({ length: imageCount }, (_, index) => ({
      src: `${URL}/${convertToSnakeCase(album)}/${index + 1}.jpeg`,
      alt: `photo ${index + 1}`,
      width: 1125,
      height: 888,
      priority: index < 2, // Set priority for the first two images as an example
    }))
  );

  const getTitle = (album) => {
    return ALBUM_TITLES[album] || convertToTitleCase(album);
  };

  return (
    <div>
      <h1>{getTitle(album)}</h1>
      <ImageWrapper images={images} />
    </div>
  );
};

export default AlbumPage;
