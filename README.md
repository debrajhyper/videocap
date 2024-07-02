# Video Caption Generator

## About

The Video Caption App is a simple web application that allows users to add captions to a video at specific timestamps. This app ensures that captions are displayed synchronously with the video playback. Users can input video URLs, add captions with their corresponding timestamps, and view the video with captions overlaid on it.

## Features

- **URL Input for Videos**: Easily input the URL of any hosted video to load it into the player.
- **Caption Input**: Add captions at specific timestamps in the video.
- **Synchronized Captions**: Captions are displayed over the video in sync with the video playback.
- **Playback Controls**: Play/pause the video and captions will follow suit, ensuring accurate synchronization.


## Technical Decisions

### Technology Stack

- **React**: Component-based architecture for modularity and maintainability.
- **TypeScript**: Type safety for error prevention and code readability.
- **Mantine UI Library**: Modern components for a responsive and visually appealing UI.

### Component Structure

- **App Component**: Manages video URL and captions state.
- **VideoInput Component**: Validates and sets the video URL.
- **CaptionInput Component**: Manages input for captions, ensuring they are added in sorted order.
- **VideoPlayer Component**: Plays the video and displays captions synchronously.

### Validation Logic

- **URL Validation**: Ensures input URLs are valid video URLs.
- **Timestamp Management**: Captions are sorted by timestamp to maintain synchronization with the video.

### User Interface

- **Intuitive Interface**: Clear inputs, validation feedback, and responsive design.
- **Real-time Feedback**: Captions update in real-time as the video plays.


## Use Cases

1. **Educational Content**: Add explanatory captions to educational videos to make them more accessible and engaging.
2. **Marketing**: Add promotional captions to marketing videos to highlight key points or features.
3. **Entertainment**: Enhance video content with subtitles or captions for better accessibility and understanding.
4. **Training Videos**: Use captions to emphasize important information in training videos, making them more effective.
5. **Video Content Creation**: Creators can add captions to their videos to make them more accessible and engaging.


## User Experience Considerations

- **Clear and Simple**: Easy-to-use interface with clear instructions.
- **Real-time Updates**: Captions synchronize seamlessly with video playback.
- **Accessibility**: Designed for usability across different devices and screen sizes.


## Trade-offs

- **Feature Scope**: Focused on essential functionalities within the given timeframe.
- **Platform Limitations**: Supports popular video hosting platforms, potentially limiting some use cases.
- **Performance vs. Real-time Accuracy**: Balanced interval for caption updates for optimal performance.


## Future Enhancements

- **Advanced Caption Features**: Custom styling options, multi-language support.
- **Extended Platform Support**: Additional video hosting platforms.
- **Improved UI/UX**: Drag-and-drop video upload, caption editing capabilities.
- **Accessibility Enhancements**: Keyboard navigation, screen reader support.
- **Performance Optimizations**: Efficient caption checking for better performance.


## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

Clone the project
```
  $git clone https://github.com/debrajhyper/videocap.git
```

Go to the project directory
```
  cd videocap
```

Install dependencies
```
  $npm install
```

Start the server
```
  $npm start
```
