// Define the Caption content type
type Caption = {
    timestamp: number;
    text: string;
}
// Define the props for CaptionInput component
type CaptionInputProps = {
    captions: Caption[];
    setCaptions: (captions: Caption[]) => void;
}