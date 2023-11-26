import { useEffect, useState } from "react";
import { useMediaQuery, Grid } from "@mui/material";
import InfiniteScrollList from "./components/InfiniteScroll.tsx";

const uniqueId1 = Math.random();

function App() {
  const [images, setImages] = useState<string[]>([]);

  const isLargeScreen = useMediaQuery("(min-width:500px)");

  const accessKey = import.meta.env.VITE_ACCESS_KEY;
  const apiUrl = `${import.meta.env.VITE_API_URL}/photos?per_page=3`;

  const getRandomImages = async (): Promise<string[]> => {
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `Client-ID ${accessKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();

      const images = data.map((image: any) => image?.urls?.full);

      return images;
    } catch (error) {
      console.error("Error:", error);
      return [];
    }
  };

  const fetchMoreData = async () => {
    const images = await getRandomImages();
    setTimeout(() => {
      setImages((prevImages) => [...prevImages, ...images]);
    }, 3000);
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <InfiniteScrollList
            fetchMoreData={fetchMoreData}
            hasMore={true}
            items={images}
            uniqueId={uniqueId1}
            isLargeScreen={isLargeScreen}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { useMediaQuery, Grid } from "@mui/material";
// import Image from "./components/Image";
// import ImageSkeleton from "./components/ImageSkeleton.tsx";
//
// function App() {
//   const [images, setImages] = useState([]);
//   const isLargeScreen = useMediaQuery("(min-width:500px)");
//
//   const accessKey = import.meta.env.VITE_ACCESS_KEY;
//   const apiUrl = `${import.meta.env.VITE_API_URL}/photos?per_page=9`;
//
//   async function getRandomImage() {
//     try {
//       const response = await fetch(apiUrl, {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           Authorization: `Client-ID ${accessKey}`,
//         },
//       });
//
//       if (!response.ok) {
//         throw new Error(`Request failed with status: ${response.status}`);
//       }
//
//       const data = await response.json();
//
//       const images = data.map((image: any) => image?.urls?.full);
//
//       setImages(images);
//       console.log("imagini =  ", images);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }
//
//   useEffect(() => {
//     getRandomImage();
//   }, []);
//
//   return (
//     <>
//       <ImageSkeleton width="100%" height={isLargeScreen ? 300 : 150} />
//       <Grid container spacing={2}>
//         {images.map((image, index) => (
//           <Grid key={index} item xs={isLargeScreen ? 4 : 12}>
//             <Image url={image} index={index} />
//           </Grid>
//         ))}
//       </Grid>
//     </>
//   );
// }
//
// /**
//  Here are 3 ways to do the responsive design
//  1. use Material UI hook useMediaQuery and Material UI Grid (the version I used)
//  const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
//  or
//  const isLargeScreen = useMediaQuery('(min-width:500px)');
//
//
//  2. use CSS Grid and media query
//  .image-container {
//    display: grid;
//    grid-template-columns: 1fr;
//    grid-gap: 10px;
//  }
//
//  .image {
//    width: 100%;
//    max-width: 100%;
//    box-sizing: border-box;
// }
//
// @media screen and (min-width: 500px) {
// .image-container {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }
//
// 3. Use flexbox and Media Query
//  .image-container {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
// }
//
// .image {
//   width: 100%;
//   max-width: 100%;
//   box-sizing: border-box;
// }
//
// @media screen and (min-width: 500px) {
// .image {
//     width: calc(33.33% - 10px);
//   }
// }
// */
//
// export default App;
