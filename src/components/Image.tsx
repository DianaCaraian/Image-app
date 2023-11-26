interface ImageProps {
    url: string;
    index: number;
}
const Image = (props: ImageProps) => {
    const { url, index } = props;

    return (
        <img
            src={url}
            alt={`Image ${index + 1}`}
            style={{ width: '100%', height: 'auto' }}
        />
    )
}

export default Image
