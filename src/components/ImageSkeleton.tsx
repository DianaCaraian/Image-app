import { Skeleton } from "@mui/material";
import { FC } from "react";

interface IImageSkeletonProps {
  height: number;
}

const ImageSkeleton: FC<IImageSkeletonProps> = ({ height }) => {
  return (
    <Skeleton
      variant="rectangular"
      width={"100%"}
      height={height}
      style={{ borderRadius: 8 }}
    />
  );
};

export default ImageSkeleton;
