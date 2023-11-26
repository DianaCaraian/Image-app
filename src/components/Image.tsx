import { FC } from "react";

interface IImageProps {
  url: string;
  index: number;
}
const Image: FC<IImageProps> = ({ url, index }) => {
  return (
    <img
      src={url}
      alt={`Image ${index + 1}`}
      style={{ width: "100%", height: "auto", borderRadius: 8 }}
    />
  );
};

export default Image;
