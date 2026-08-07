import { useRouter } from "next/router";
import ImageWrapper from "./ImageWrapper";
import { URL, getAlbum } from "../utils/constants";

const AlbumPage = () => {
  const router = useRouter();
  const { album } = router.query;

  if (!album) return null;

  const albumData = getAlbum(album);

  if (!albumData) {
    return <p>This photo album could not be found.</p>;
  }

  const images = Array.from({ length: albumData.imageCount }, (_, index) => ({
    src: `${URL}/${albumData.folder}/${index + 1}.jpeg`,
    alt: `${albumData.title} photograph ${index + 1} of ${albumData.imageCount}`,
    width: 1125,
    height: 888,
  }));

  return (
    <div>
      <h1>{albumData.title}</h1>
      <ImageWrapper images={images} />
    </div>
  );
};

export default AlbumPage;
