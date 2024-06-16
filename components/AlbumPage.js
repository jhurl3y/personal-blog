import { useRouter } from "next/router";
import ImageWrapper from "./ImageWrapper";
import { URL } from "../utils/constants";

const AlbumPage = () => {
  const router = useRouter();
  const { album } = router.query;

  if (!album) return null;

  const imageCount = 10; // Change this to the actual number of images per album

  const images = Array.from({ length: imageCount }, (_, index) => ({
    src: `${URL}/${album}/${index + 1}.jpeg`,
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

const convertToTitleCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export default AlbumPage;
