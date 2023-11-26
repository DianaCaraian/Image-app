import { useEffect, useState } from "react";
import { useMediaQuery, Grid } from "@mui/material";
import InfiniteScrollList from "./components/InfiniteScroll.tsx";
import { getRandomImages } from "./data/imagesApi.ts";
import { CAMPAIGN_REPORT_CONSTS } from "./consts";

const uniqueId = Math.random();

function App() {
  const isLargeScreen = useMediaQuery("(min-width:500px)");
  const [images, setImages] = useState<string[]>([]);
  const [endOfList, setEndOfList] = useState<boolean>(false);

  const fetchMoreData = async () => {
    const images = await getRandomImages();
    setTimeout(() => {
      setImages((prevImages) => [...prevImages, ...images]);
    }, CAMPAIGN_REPORT_CONSTS.apiCallDelay);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  useEffect(() => {
    if (images.length > CAMPAIGN_REPORT_CONSTS.maxNumberOfImages) {
      setEndOfList(true);
    }
  }, [images]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <InfiniteScrollList
            fetchMoreData={fetchMoreData}
            hasMore={!endOfList}
            items={images}
            uniqueId={uniqueId}
            isLargeScreen={isLargeScreen}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

/**
 Here are 3 ways to do the responsive design
 1. use Material UI hook useMediaQuery and Material UI Grid (the version I used)
 const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
 or
 const isLargeScreen = useMediaQuery('(min-width:500px)');


 2. use CSS Grid and media query
 .image-container {
 display: grid;
 grid-template-columns: 1fr;
 grid-gap: 10px;
 }

 .image {
 width: 100%;
 max-width: 100%;
 box-sizing: border-box;
 }

 @media screen and (min-width: 500px) {
  .image-container {
  grid-template-columns: repeat(3, 1fr);
  }
  }

  3. Use flexbox and Media Query
  .image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  }

  .image {
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  }

 @media screen and (min-width: 500px) {
  .image {
  width: calc(33.33% - 10px);
  }
  }
 */
