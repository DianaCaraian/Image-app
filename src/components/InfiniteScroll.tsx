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
  uniqueId: number;
  isLargeScreen: boolean;
}

const InfiniteScrollList: FC<IInfiniteScrollListProps> = ({
  items,
  fetchMoreData,
  hasMore = true,
  uniqueId,
  isLargeScreen = false,
}) => {
  const divId = `scrollableDiv-${uniqueId}`;

  const SkeletonComponent = () => {
    const skeletonHeight = isLargeScreen ? 400 : 300;

    return isLargeScreen ? (
      <ImageListSkeleton height={skeletonHeight} />
    ) : (
      <ImageSkeleton height={skeletonHeight} />
    );
  };

  return (
    <div style={{ height: "1000px", overflow: "auto" }} id={divId}>
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
        scrollableTarget={divId}
      >
        <Grid container spacing={2}>
          {items.map((image, index) => (
            <Grid key={index} item xs={isLargeScreen ? 4 : 12}>
              <Image url={image} index={index} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollList;
