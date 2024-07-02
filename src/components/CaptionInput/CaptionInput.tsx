import { Button, Flex, Group, NumberInput, Textarea } from '@mantine/core';
import { useState } from 'react';
import classes from './CaptionInput.module.css'

export const CaptionInput: React.FC<CaptionInputProps> = ({ captions, setCaptions }) => {
    const [timestamp, setTimestamp] = useState<number | string>(0);
    const [text, setText] = useState<string>('');

    const addCaption = () => {
        setCaptions([...captions,{ timestamp: Number(timestamp), text }]);
        setTimestamp(0);
        setText('');
    };

    return (
        <Flex
            mih={50}
            gap="md"
            justify="center"
            align="center"
            direction="column"
            wrap="wrap"
        >
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
            <Group justify="flex-end" w='100%'>
                <Button onClick={addCaption}>
                    Add Caption
                </Button>
            </Group>
        </Flex>
    );
};
