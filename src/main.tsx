import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import App from '@App'
import { MantineProvider } from '@mantine/core';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={{
      fontFamily: 'Greycliff CF, sans-serif',
      primaryColor: 'violet',
    }}
    withCssVariables
    >
      <App />
    </MantineProvider>
  </React.StrictMode>,
)