import Image from "next/image";

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  priority,
  onLoadingComplete,
}) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    className="next-image"
    onLoadingComplete={onLoadingComplete}
  />
);

export default ImageComponent;
