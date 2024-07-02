import { useEffect, useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import './VideoPlayer.css'

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, captions }) => {
    const [currentCaption, setCurrentCaption] = useState<string>('');
    const playerRef = useRef<ReactPlayer>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = playerRef.current?.getCurrentTime() || 0;
            const activeCaption = captions.find(
                (caption) => currentTime >= caption.timestamp && currentTime < caption.timestamp + .9
            );
            setCurrentCaption(activeCaption ? activeCaption.text : '');
        }, 500); // Check every 500ms

        return () => clearInterval(interval);
    }, [captions]);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <ReactPlayer
                className='react-player'
                url={videoUrl}  
                controls
                ref={playerRef}
                style={{ position: 'relative', margin: '0 auto' }}
            />
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
                    {currentCaption}
                </div>
            )}
        </div>
    );
};