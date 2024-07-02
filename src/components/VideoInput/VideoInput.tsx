import { useState, useRef } from 'react';
import classes from './VideoInput.module.css';
import { TextInput, Button } from '@mantine/core';
import { IconLink, IconTextCaption } from '@tabler/icons-react';

export const VideoInput: React.FC<VideoInputProps> = ({ setVideoUrl }) => {
    // State to manage error messages for invalid URL input
    const [error, setError] = useState<string>('');
    // Ref to access the value of the video URL input field
    const videoInputRef = useRef<HTMLInputElement>(null);

    // Function to validate if a string is a valid URL
    const isValidUrl = (urlString: string) => {
        try {
            const url = new URL(urlString);
            return url.protocol === 'http:' || url.protocol === 'https:';
        } catch (e) {
            return false;
        }
    };
    // Handler function to validate the URL and update the video URL state
    const handleUrlClick = () => {
        setError('');
        const videoUrl = videoInputRef.current?.value
        if (!videoUrl || !isValidUrl(videoUrl)) {
            // Set an error message if the URL is empty or invalid
            return setError('Please enter a valid URL');
        }
        // Call the setVideoUrl function to update the video URL in the parent component
        setVideoUrl(videoUrl || '');
    };
    return (
        <TextInput
            radius="md"
            size="md"
            placeholder="Paste a link of a video"
            rightSectionWidth='8.6rem'
            w={{ base: '90%', sm: '80%', md: '60%', lg: '40%' }}
            ref={videoInputRef}
            leftSection={<IconLink />}
            classNames={{
                root: classes.wrapper,
                section: classes.button,
            }}
            error={error}
            rightSection={
                <Button
                    radius="md"
                    fullWidth
                    leftSection={<IconTextCaption />}
                    onClick={handleUrlClick}
                >Generate</Button>
            }
        />
    );
}