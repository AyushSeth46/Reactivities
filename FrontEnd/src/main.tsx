import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './app/layout/styles.css'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
