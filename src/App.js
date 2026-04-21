import {Routes, Route} from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

//Components / pages
import Landing from './pages/landing';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route exact path = "/" element={<Landing/>}/>
        <Route exact path = "/About" element={<About/>}/>
        <Route exact path = "/Contact" element={<Contact/>}/>
        <Route exact path = "/Projects" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
