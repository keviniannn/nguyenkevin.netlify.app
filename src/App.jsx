import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './components/Landing'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Spotivents from './projects/Spotivents';
import OOTD from './projects/OOTD';
import Noted from './projects/Noted';
import BetterPredict from './projects/BetterPredict';
import CouplesCalendar from './projects/CouplesCalendar';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Landing/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/spotivents" element={<Spotivents />} />
          <Route path="/ootd" element={<OOTD />} />
          <Route path="/noted" element={<Noted />} />
          <Route path="/betterpredict" element={<BetterPredict />} />
          <Route path="/couplescalendar" element={<CouplesCalendar />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;