import { Skeleton } from "@mui/material";

interface ImageSkeletonProps {
  width: string;
  height: number;
}

const ImageSkeleton = (props: ImageSkeletonProps) => {
  const { width, height } = props;
  return (
    <Skeleton
      variant="rectangular"
      width={width}
      height={height}
      style={{ borderRadius: 8 }}
    />
  );
};

export default ImageSkeleton;
