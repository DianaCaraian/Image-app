import { Grid, Skeleton } from '@mui/material';

const ImageSkeleton = () => {
    return (
        <Grid container spacing={2}>
            {[...Array(3)].map((_, index) => (
                <Grid key={index} item xs={12} md={4}>
                    <Skeleton
                        variant="rectangular"
                        width="100%"
                        height={160}
                        style={{ borderRadius: 8 }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default ImageSkeleton;