type Caption = {
    timestamp: number;
    text: string;
}

type VideoPlayerProps = {
    videoUrl: string;
    captions: Caption[];
}