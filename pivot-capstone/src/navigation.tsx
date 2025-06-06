import { Routes, Route, Link } from 'react-router-dom';
import DiceGame from './DiceGame/App';
import ContactSearch from './ContactSearch/App';
import CatApp from './CatApp/App';
import YoutubeVideo from './YouTubeVideo/App';
import SocialApp from './SocialApp/App';


export default function Navigation() {
 return (
   <div>
     <nav style={{ padding: "1rem", background: "#eee" }}>
       <Link to="/dice">Dice Game</Link> |{" "}
       <Link to="/contacts">Contact Search</Link> |{" "}
       <Link to="/cats">Cat App</Link> |{" "}
       <Link to="/youtube">YouTube Video</Link> |{" "}
       <Link to="/social">Social App</Link>
     </nav>


     <Routes>
       <Route path="/dice" element={<DiceGame />} />
       <Route path="/contacts" element={<ContactSearch />} />
       <Route path="/cats" element={<CatApp />} />
       <Route path="/youtube" element={<YoutubeVideo />} />
       <Route path="/social" element={<SocialApp />} />
       <Route path="*" element={<p>Select an app from the nav</p>} />
     </Routes>
   </div>
 );
}


