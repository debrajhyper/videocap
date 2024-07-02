// Define the props for caption component
type Caption = {
    timestamp: number;
    text: string;
}
// Define the props for VideoPlayer component
type VideoPlayerProps = {
    videoUrl: string;
    captions: Caption[];
}