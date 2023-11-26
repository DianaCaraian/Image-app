import { FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Grid } from "@mui/material";
import Image from "./Image.tsx";
import ImageSkeleton from "./ImageSkeleton.tsx";
import ImageListSkeleton from "./ImagesListSkeleton.tsx";

interface IInfiniteScrollListProps {
  items: string[];
  fetchMoreData: () => void;
  hasMore?: boolean;
  isLargeScreen: boolean;
}

const InfiniteScrollList: FC<IInfiniteScrollListProps> = ({
  items,
  fetchMoreData,
  hasMore = true,
  isLargeScreen = false,
}) => {
  const SkeletonComponent = () => {
    const skeletonHeight = isLargeScreen ? 400 : 300;

    return isLargeScreen ? (
      <ImageListSkeleton height={skeletonHeight} />
    ) : (
      <ImageSkeleton height={skeletonHeight} />
    );
  };

  return (
    <InfiniteScroll
      style={{ overflow: "hidden" }}
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<SkeletonComponent />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <Grid container spacing={2}>
        {items.map((image, index) => (
          <Grid key={index} item xs={isLargeScreen ? 4 : 12}>
            <Image url={image} index={index} />
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
};

export default InfiniteScrollList;
