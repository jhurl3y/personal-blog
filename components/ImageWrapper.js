import React, { useEffect, useState, useRef } from "react";
import ImageComponent from "./ImageComponent";
import Loader from "./Loader";

const NUMBER_TO_SHOW = 4;

const ImageWrapper = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, NUMBER_TO_SHOW).map((obj) => ({
      ...obj,
      loaded: false,
    }))
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hitBottom, setHitBottom] = useState(false);
  const observer = useRef();
  const allVisibleImagesLoaded = visibleImages.every(
    (image) => image.loaded === true
  );
  const allImagesLoaded =
    allVisibleImagesLoaded && visibleImages.length === images.length;

  const loadMoreImages = () => {
    const nextPage = page + 1;
    const nextImageBatch = images
      .slice(page * NUMBER_TO_SHOW, nextPage * NUMBER_TO_SHOW)
      .map((obj) => ({
        ...obj,
        loaded: false,
      }));

    setVisibleImages((prevVisibleImages) => [
      ...prevVisibleImages,
      ...nextImageBatch,
    ]);
    setPage(nextPage);
  };

  // unset loading UI when all images fetched
  useEffect(() => {
    if (allImagesLoaded) {
      setLoading(false);
    }
  }, [allImagesLoaded]);

  // if all visible images fetched, fetch more images
  useEffect(() => {
    if (allVisibleImagesLoaded && !allImagesLoaded && hitBottom) {
      setLoading(true);
      setHitBottom(false);
      loadMoreImages();
    }
  }, [allVisibleImagesLoaded, hitBottom]);

  const onScroll = () => {
    if (
      window.innerHeight + window.scrollY + 500 >=
      document.documentElement.scrollHeight
    ) {
      setHitBottom(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onLoadingComplete = (img) => {
    setVisibleImages((prevVisibleImages) =>
      prevVisibleImages.map((image) =>
        image.alt === img.alt ? { ...image, loaded: true } : image
      )
    );
  };

  return (
    <div>
      {visibleImages.map((image, index) => {
        return (
          <div key={image.alt}>
            <ImageComponent
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={image.priority}
              placeholder="blur"
              onLoadingComplete={onLoadingComplete}
            />
            <br />
          </div>
        );
      })}
      {loading && (
        <div style={{ textAlign: "center", padding: "10px" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ImageWrapper;
