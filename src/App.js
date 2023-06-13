import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { PageHeader } from './components/page-header/page-header';
import { MainView } from './components/main-view/main-view';
import { AboutView } from './components/about-view/about-view';
import { ProjectView } from './components/project-view/project-view';
import { ContactView } from './components/contact-view/contact-view';

function App() {
  return (
    <div className='app-container'>
    <BrowserRouter>
      <PageHeader />
      <div className='main-container'>
        <Routes>
          <Route
            path="/"
            element={<MainView />}
          />
          <Route
            path="/about"
            element={<AboutView />}
          />
          <Route
            path="/projects"
            element={<ProjectView />}
          />
          <Route
            path="/contact"
            element={<ContactView />}
          />
        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
