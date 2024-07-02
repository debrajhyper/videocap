import { useState } from 'react';
import './App.css';
import { CaptionInput, VideoInput, VideoPlayer } from '@Components';
import { Flex, Text, Title, Grid, Paper } from '@mantine/core';
import classes from './App.module.css'

function App() {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [captions, setCaptions] = useState<Caption[]>([]);

  return (
    <main className='main'>
      <div className='gradient' />
      <div className='app'>
        <Flex
          mih={50}
          miw={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <Text size="md" fw={700} tt="uppercase" c='violet.6' mb={20} className={classes.top_text}>Video Caption Generator</Text>
          <div>
            <Title order={1} fw={900} c='dark.9' className={classes.title}>Generate your caption</Title>
            <Title order={1} fw={900} c='dark.9' className={classes.title}>for your videos</Title>
          </div>
          <Text size="xl" ta='center' c='dimmed' w={{ base: '90%', sm: '80%', md: '70%' }} mt={10} className={classes.text}>The Video Caption App is a simple web application that allows users to add captions to a video at specific timestamps. This app ensures that captions are displayed synchronously with the video playback. Users can input video URLs, add captions with their corresponding timestamps, and view the video with captions overlaid on it.</Text>
          <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
        </Flex>

        <Grid justify="space-between" align="stretch"
          p={{ base: 20, sm: 70, md: 20, lg: 40 }}
          pt={{ base: 20, sm: 40, md: 80, lg: 100 }}
          pb={{ base: 100, md: 150, lg: 230 }}
          overflow='hidden'
          w='100%'
        >
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }} m='0 auto'>
            {
              videoUrl &&
              <Paper shadow="xs" withBorder p="xl" h={'100%'}>
                <CaptionInput captions={captions} setCaptions={setCaptions} />
              </Paper>
            }
          </Grid.Col>
          <Grid.Col span="auto">
            <VideoPlayer videoUrl={videoUrl} captions={captions} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
            {
              captions.length > 0 &&
              <Paper shadow="xs" withBorder p="xl" h={'100%'}>
                <Text fw={800} c='violet'>Video captions:</Text>
                {
                  captions.map((caption: Caption, index: number) => {
                    return (
                      <span key={index}>
                        <Text>{caption.timestamp}s: {caption.text}</Text>
                      </span>
                    )
                  })
                }
              </Paper>
            }
          </Grid.Col>
        </Grid>
      </div>
    </main>
  );
}

export default App;
