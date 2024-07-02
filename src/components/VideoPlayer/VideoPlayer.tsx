import { useEffect, useState, useRef } from 'react';
import './VideoPlayer.css'
import ReactPlayer from 'react-player/lazy';
import { Spinner } from '@Components/Loader/Spinner';
import { Text } from '@mantine/core';

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, captions }) => {
    // State to manage the current caption being displayed
    const [currentCaption, setCurrentCaption] = useState<string>('');
    // Ref to access the ReactPlayer instance
    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        // Set up an interval to check the current time of the video
        const interval = setInterval(() => {
            const currentTime = playerRef.current?.getCurrentTime() || 0;
            // Find the active caption based on the current time
            const activeCaption = captions.find(
                (caption) => currentTime >= caption.timestamp && currentTime < caption.timestamp + .9
            );
            // Update the current caption state
            setCurrentCaption(activeCaption ? activeCaption.text : '');
        }, 500); // Check every 500ms

        // Clear the interval when the component unmounts or captions change
        return () => clearInterval(interval);
    }, [captions]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {/* Video player with controls */}
            <ReactPlayer
                className='react-player'
                url={videoUrl}
                controls
                ref={playerRef}
                style={{ position: 'relative', margin: '0 auto' }}
                fallback={<Spinner />}
            />
            {/* Display the current caption */}
            {currentCaption && (
                <div
                    style={{
                        position: 'absolute',
                        bottom: '10%',
                        width: '100%',
                        textAlign: 'center',
                        color: 'white',
                        padding: '10px',
                        fontSize: '20px',
                        margin: '0 auto',
                    }}
                >
                    <Text style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', display: 'inline-block', padding: '10px' }}>{currentCaption}</Text>
                </div>
            )}
        </div>
    );
};