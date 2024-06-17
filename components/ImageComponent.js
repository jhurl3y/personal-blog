import Image from "next/image";

const getShimmer = (w, h) => {
  const baseOffset = Math.random() * 30; // Random base offset between 0% and 30%
  const offset1 = baseOffset + 20; // Add 20% to base offset
  const offset2 = baseOffset + 50; // Add 30% (20% + 30%) to base offset
  const offset3 = baseOffset + 70; // Add 20% (50% + 20%) to base offset

  return `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="${offset1}%" />
      <stop stop-color="#222" offset="${offset2}%" />
      <stop stop-color="#333" offset="${offset3}%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.2s" repeatCount="indefinite"  />
</svg>`;
};

const toBase64 = (str) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  priority,
  onLoadingComplete,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className="next-image"
      placeholder={`data:image/svg+xml;base64,${toBase64(
        getShimmer(width, height)
      )}`}
      onLoadingComplete={onLoadingComplete}
    />
  );
};

export default ImageComponent;
