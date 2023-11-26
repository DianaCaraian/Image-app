import { Box } from "@mui/material";
import ImageSkeleton from "./ImageSkeleton.tsx";

interface ImageSkeletonProps {
  width: string;
  height: number;
}

const ImageListSkeleton = (props: ImageSkeletonProps) => {
  const { width, height } = props;

  return (
    <Box sx={{ display: "flex", gap: 3 }}>
      <ImageSkeleton width={width} height={height} />
      <ImageSkeleton width={width} height={height} />
      <ImageSkeleton width={width} height={height} />
    </Box>
  );
};

export default ImageListSkeleton;
