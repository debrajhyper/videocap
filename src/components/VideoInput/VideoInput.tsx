import { useState, useRef } from 'react';
import { TextInput, Button } from '@mantine/core';
import { IconLink, IconTextCaption } from '@tabler/icons-react';
import classes from './VideoInput.module.css';

export const VideoInput: React.FC<VideoInputProps> = ({ setVideoUrl }) => {
    const [error, setError] = useState<string>('');
    const videoInputRef = useRef<HTMLInputElement>(null);

    const handleUrlClick = () => {
        setError('');
        const videoUrl = videoInputRef.current?.value
        if (videoUrl === '' || videoUrl === undefined || videoUrl === null) {
            return setError('Please enter a valid URL');
        }
        setVideoUrl(videoUrl || '');
    }
    return (
        <TextInput
            radius="md"
            size="md"
            placeholder="Paste a link to a video"
            rightSectionWidth='8.6rem'
            w={{ base: '90%', sm:'80%', md: '60%', lg: '40%' }}
            // value={videoUrl}
            // onChange={(e) => setVideoUrl(e.currentTarget.value)}
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