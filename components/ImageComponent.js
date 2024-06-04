import Image from "next/image";

const ImageComponent = ({ src, alt, width, height, priority }) => (
  <Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    priority={priority}
    className="next-image"
  />
);

export default ImageComponent;
