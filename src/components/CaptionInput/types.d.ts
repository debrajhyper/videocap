type Caption = {
    timestamp: number;
    text: string;
}

type CaptionInputProps = {
    captions: Caption[];
    setCaptions: (captions: Caption[]) => void;
}