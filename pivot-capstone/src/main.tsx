import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './DiceGame/App.tsx'
// import App from './ContactSearch/App.tsx'
// import App from './CatApp/App.tsx'
import App from './YouTubeVideo/App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
