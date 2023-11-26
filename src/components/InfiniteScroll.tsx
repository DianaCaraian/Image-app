import { useState, useEffect, useCallback, FC } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Grid,
} from "@mui/material";
import Image from "./Image.tsx";
import ImageSkeleton from "./ImageSkeleton.tsx";

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

  return (
    <div style={{ height: "1000px", overflow: "auto" }} id={divId}>
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <ImageSkeleton width="100%" height={isLargeScreen ? 300 : 150} />
        }
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
        scrollableTarget={divId}
      >
        {/*<List></List>*/}
        {/*<List>*/}
        {/*  {items.map((item, index) => (*/}
        {/*    <ListItem key={index}>*/}
        {/*      /!*TODO fa asta generic sau modifica nume componeneta*!/*/}
        {/*      <Image url={item} index={index} />*/}
        {/*    </ListItem>*/}
        {/*  ))}*/}
        {/*</List>*/}

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

// import { useState, useCallback } from "react";
// import InfiniteScroll from "react-infinite-scroll-component";
// import { List, ListItem, ListItemText } from "@mui/material";
// import ImageSkeleton from "./ImageSkeleton.tsx";
//
// const InfiniteScrollList = () => {
//   const [items, setItems] = useState([1, 2, 3]);
//   const [hasMore, setHasMore] = useState(true);
//
//   const fetchMoreData = useCallback(() => {
//     if (items.length >= 100) {
//       setHasMore(false);
//       return;
//     }
//
//     // simulate a network request
//     setTimeout(() => {
//       setItems((prevItems) => [...prevItems, prevItems.length]);
//     }, 1500);
//   }, [setItems]);
//
//   return (
//     <div
//       style={{ height: "100px", backgroundColor: "pink", overflow: "auto" }}
//       id="scrollableDiv"
//     >
//       <InfiniteScroll
//         style={{ overflow: "hidden" }}
//         dataLength={items.length}
//         next={fetchMoreData}
//         hasMore={hasMore}
//         loader={<ImageSkeleton width="100%" height={300} />}
//         endMessage={
//           <p style={{ textAlign: "center" }}>
//             <b>Yay! You have seen it all</b>
//           </p>
//         }
//         scrollableTarget="scrollableDiv"
//       >
//         <List></List>
//         <List>
//           {items.map((_, index) => (
//             <ListItem key={index}>
//               <ListItemText primary={`Item ${index + 1}`} />
//             </ListItem>
//           ))}
//         </List>
//       </InfiniteScroll>
//     </div>
//   );
// };
//
// export default InfiniteScrollList;
