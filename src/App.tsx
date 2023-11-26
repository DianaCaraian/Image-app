import {useEffect, useState} from 'react'
import './App.css'
import { useMediaQuery, Grid} from "@mui/material";
import Image from "./components/Image";

function App() {

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const isLargeScreen = useMediaQuery('(min-width:500px)');

    // another way to do the responsive design
    // 1.
    // const isLargeScreen = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));
    //
    // 2.
    // @media (min-width: 500px) {
    //     .MuiGrid-item {
    //         flex: 0 0 50%;
    //         max-width: 50%;
    //     }


    const accessKey = import.meta.env.VITE_ACCESS_KEY;
    const apiUrl = `${import.meta.env.VITE_API_URL}/photos?per_page=9`;

    async function getRandomImage() {
        try {
            const response = await fetch(apiUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Client-ID ${accessKey}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Request failed with status: ${response.status}`);
            }

            const data = await response.json();

            const images = data.map((image: any) => (image?.urls?.full))

            setImages(images);
            console.log("imagini =  ", images);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    useEffect(() => {
        getRandomImage();
    }, []);



  return (
    <>
        <Grid container spacing={2}>
            {images.map((image, index) => (
                <Grid
                    key={index}
                    item
                    xs={isLargeScreen ? 4 : 12}
                >
                   <Image url={image} index={index} />
                </Grid>
            ))}
        </Grid>
    </>
  )
}

export default App