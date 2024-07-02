import { useState } from 'react';
import classes from './CaptionInput.module.css'
import { Button, Flex, Group, NumberInput, Textarea, Text } from '@mantine/core';

export const CaptionInput: React.FC<CaptionInputProps> = ({ captions, setCaptions }) => {
    // State to manage the timestamp input for video
    const [timestamp, setTimestamp] = useState<number | string>(0);
    // State to manage the current caption text input for video
    const [text, setText] = useState<string>('');

    // Function to add a new caption to the captions list
    const addCaption = () => {
        // Create a new array with the current captions and the new caption
        const newCaptions = [...captions, { timestamp: Number(timestamp), text }];
        // Sort the new array by the timestamp
        newCaptions.sort((a, b) => a.timestamp - b.timestamp);
        // Update the state with the sorted array
        setCaptions(newCaptions);

        // Reset the input fields
        setTimestamp(0);
        setText('');
    };

    return (
        <Flex
            mih={50}
            gap="md"
            justify="center"
            align="start"
            direction="column"
            wrap="wrap"
        >
            <Text fw={800} ta='left' c='violet'>Sync caption with video</Text>
            {/* Input for entering the timestamp of the caption */}
            <NumberInput
                label="Caption Timestamp (in seconds)"
                placeholder="Enter timestamp"
                value={timestamp}
                onChange={setTimestamp}
                allowNegative={false}
                width='100%'
                classNames={{
                    root: classes.number_input,
                }}
            />
            {/* Input for entering the caption text */}
            <Textarea
                label="Caption Text"
                placeholder="Enter caption text"
                value={text}
                onChange={(event) => setText(event.currentTarget.value)}
                autosize
                minRows={4}
                maxRows={10}
                w='100%'
            />
            {/* Button to add the new caption */}
            <Group justify="flex-end" w='100%'>
                <Button onClick={addCaption}>
                    Add Caption
                </Button>
            </Group>
        </Flex>
    );
};
