import ImageComponent from "./ImageComponent";

const ImageWrapper = ({ images }) => {
  return images.map((image, index) => (
    <div key={image.alt}>
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
  ));
};

export default ImageWrapper;
