import {Routes, Route} from "react-router-dom";
import {CssBaseline, createTheme, ThemeProvider} from '@mui/material';

//Components / pages
import Landing from './pages/landing';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';

function App() {

  const theme = createTheme ({
    palette: {
      background: {
        default: "#fffaeb"
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route exact path = "/" element={<Landing/>}/>
          <Route exact path = "/About" element={<About/>}/>
          <Route exact path = "/Contact" element={<Contact/>}/>
          <Route exact path = "/Projects" element={<Projects/>}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
