import React, { useEffect, useRef, useState } from "react";
import ImageComponent from "./ImageComponent";
import styles from "./ImageWrapper.module.css";

const BATCH_SIZE = 24;

const ImageWrapper = ({ images }) => {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(BATCH_SIZE, images.length),
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const sentinelRef = useRef(null);
  const triggerRefs = useRef([]);
  const activeImage = activeIndex === null ? null : images[activeIndex];
  const visibleImages = images.slice(0, visibleCount);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || visibleCount >= images.length) return undefined;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleCount((count) => Math.min(count + BATCH_SIZE, images.length));
      }
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [images.length, visibleCount]);

  useEffect(() => {
    if (activeIndex === null) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => Math.min(index + 1, images.length - 1));
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, images.length]);

  const closeLightbox = () => {
    const closingIndex = activeIndex;
    setActiveIndex(null);
    window.requestAnimationFrame(() =>
      triggerRefs.current[closingIndex]?.focus(),
    );
  };

  return (
    <>
      <div className={styles.gallery}>
        {visibleImages.map((image, index) => (
          <button
            className={styles.imageButton}
            key={image.src}
            onClick={() => setActiveIndex(index)}
            ref={(element) => {
              triggerRefs.current[index] = element;
            }}
            type="button"
          >
            <ImageComponent
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              priority={index < 2}
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>
      {visibleCount < images.length && (
        <div ref={sentinelRef} className={styles.sentinel} />
      )}
      {activeImage && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.alt}
        >
          <button
            className={styles.close}
            type="button"
            onClick={closeLightbox}
            aria-label="Close image viewer"
          >
            ×
          </button>
          <button
            className={styles.previous}
            type="button"
            onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
            disabled={activeIndex === 0}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className={styles.lightboxImage}>
            <ImageComponent
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              priority
              sizes="95vw"
            />
            <p>{activeImage.alt}</p>
          </div>
          <button
            className={styles.next}
            type="button"
            onClick={() =>
              setActiveIndex((index) => Math.min(index + 1, images.length - 1))
            }
            disabled={activeIndex === images.length - 1}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
    </>
  );
};

export default ImageWrapper;
