import { Box } from "@mui/material";
import ImageSkeleton from "./ImageSkeleton.tsx";
import { FC } from "react";

interface IImageSkeletonProps {
  height: number;
}

const ImageListSkeleton: FC<IImageSkeletonProps> = ({ height }) => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <ImageSkeleton height={height} />
      <ImageSkeleton height={height} />
      <ImageSkeleton height={height} />
    </Box>
  );
};

export default ImageListSkeleton;
