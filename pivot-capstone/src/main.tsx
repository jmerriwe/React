import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navigation from './navigation';
import { BrowserRouter } from 'react-router-dom';
// import App from './DiceGame/App.tsx'
// import App from './ContactSearch/App.tsx'
// import App from './CatApp/App.tsx'
// import App from './YouTubeVideo/App';
import App from './SocialApp/App';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
     <BrowserRouter>
     <Navigation />
   </BrowserRouter>
  </StrictMode>,
)
