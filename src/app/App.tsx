import { useState } from 'react';
import './App.css';
import classes from './App.module.css'
import { Flex, Text, Title, Grid, Paper } from '@mantine/core';
import { CaptionInput, VideoInput, VideoPlayer } from '@Components';

function App() {
  // State to store the video URL
  const [videoUrl, setVideoUrl] = useState<string>('');
  // State to store the list of captions
  const [captions, setCaptions] = useState<Caption[]>([]);

  return (
    <main className='main'>
      {/* Gradient background */}
      <div className='gradient' />
      <div className='app'>
        {/* Flex container to center and style the main elements */}
        <Flex
          mih={50}
          miw={50}
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          {/* Header Text */}
          <Text size="md" fw={700} tt="uppercase" c='violet.6' mb={20} className={classes.top_text}>Video Caption Generator</Text>
          {/* Main Title */}
          <div>
            <Title order={1} fw={900} c='dark.9' className={classes.title}>Generate your caption</Title>
            <Title order={1} fw={900} c='dark.9' className={classes.title}>for your videos</Title>
          </div>
          {/* Description Text */}
          <Text size="xl" ta='center' c='dimmed' w={{ base: '90%', sm: '80%', md: '70%' }} mt={10} className={classes.text}>The Video Caption App is a simple web application that allows users to add captions to a video at specific timestamps. This app ensures that captions are displayed synchronously with the video playback. Users can input video URLs, add captions with their corresponding timestamps, and view the video with captions overlaid on it.</Text>
          {/* Component to input video URL */}
          <VideoInput videoUrl={videoUrl} setVideoUrl={setVideoUrl} />
        </Flex>
        {/* Grid to layout the components */}
        <Grid justify="space-between" align="stretch"
          p={{ base: 20, sm: 70, md: 20, lg: 40 }}
          pt={{ base: 20, sm: 40, md: 80, lg: 100 }}
          pb={{ base: 100, md: 150, lg: 230 }}
          overflow='hidden'
          w='100%'
        >
          {/* Column for the caption input */}
          <Grid.Col span={{ base: 12, md: 4, lg: 3 }} m='0 auto'>
            {
              videoUrl &&
              <Paper shadow="xs" withBorder p="xl" h={'100%'}>
                <CaptionInput captions={captions} setCaptions={setCaptions} />
              </Paper>
            }
          </Grid.Col>
          {/* Column for the video player */}
          <Grid.Col span="auto">
            <VideoPlayer videoUrl={videoUrl} captions={captions} />
          </Grid.Col>
          {/* Column for displaying added captions */}
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
        <Text ta='center' c='dimmed' mb={20}>Crafted by <a href='https://linkedin.com/in/debrajkarmakar010/' target='_blank'>Debraj Karmakar.</a></Text>
      </div>
    </main>
  );
}

export default App;
