import React, { useState, useRef, useCallback } from "react";
import ImageComponent from "./ImageComponent";
import Loader from "./Loader";

const NUMBER_TO_SHOW = 2;

const ImageWrapper = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState(
    images.slice(0, NUMBER_TO_SHOW)
  );
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const loadMoreImages = useCallback(() => {
    setLoading(true);
    const nextPage = page + 1;
    const newImages = images.slice(0, nextPage * NUMBER_TO_SHOW);
    setVisibleImages(newImages);
    setPage(nextPage);
    setLoading(false);
  }, [page, images]);

  const lastImageRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreImages();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loadMoreImages]
  );

  return (
    <div>
      {visibleImages.map((image, index) => {
        return (
          <div
            key={image.alt}
            ref={index === visibleImages.length - 1 ? lastImageRef : undefined}
          >
            <ImageComponent
              key={index}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={image.priority}
              placeholder="blur"
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
