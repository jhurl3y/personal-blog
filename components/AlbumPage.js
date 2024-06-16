import { useRouter } from "next/router";
import ImageWrapper from "./ImageWrapper";
import { URL, ALBUM_IMAGES } from "../utils/constants";
import { convertToSnakeCase, convertToTitleCase } from "../utils/helpers";

const AlbumPage = () => {
  const router = useRouter();
  const { album } = router.query;

  if (!album) return null;

  const imageCount = ALBUM_IMAGES[album];

  const images = Array.from({ length: imageCount }, (_, index) => ({
    src: `${URL}/${convertToSnakeCase(album)}/${index + 1}.jpeg`,
    alt: `photo ${index + 1}`,
    width: 1125,
    height: 888,
    priority: index < 2, // Set priority for the first two images as an example
  }));

  return (
    <div>
      <h1>{convertToTitleCase(album)}</h1>
      <ImageWrapper images={images} />
    </div>
  );
};

export default AlbumPage;
