import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
      <div id="page-body"></div>
        <Routes>
          <Route  path='/' element={<HomePage/>} />
          <Route  path='/about' element={<AboutPage/>} />
          <Route  path='/contact' element={<ContactPage/>} />
          <Route  path='/projects' element={<ProjectsPage/>} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
